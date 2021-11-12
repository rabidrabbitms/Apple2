import { Inject, Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import env from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { httpErrorHandlerToken } from '../utilities/tokens/http-error-handler.token';
import DialogService from './dialog.service';
import { Global } from './Global';
import { Storage } from '@ionic/storage'
import User from '../../MLC/Types/User';

interface EndPoint { method: string; controller: string; }
const requesting$ = new BehaviorSubject(false);

@Injectable({ providedIn: 'root' })
export default class HttpService {
    constructor(readonly dialogs: DialogService, readonly router: Router, readonly global: Global,public storage: Storage,  @Inject(httpErrorHandlerToken) @Optional()
        readonly errorHandler?: (error: any) => Promise<void | never> | void | never
    ) { }
    async post(type: string, endPoint: EndPoint, body: object): Promise<any>;
    async post(endPoint: EndPoint, body: object): Promise<any>;
    async post(typeOrEndPoint: string | EndPoint, endPointOrBody: EndPoint | object, body?: object) {
        requesting$.next(true);
      try {
        const user = await this.storage.get('user');
        const token = await this.storage.get('Token');
          const { controller, method, type } = parsePostParameter(typeOrEndPoint, endPointOrBody);
          const postBody = body ? body : endPointOrBody;
          const response = await makeRequest(controller, method, postBody, type, "POST", user, token);

          return await processResponse(response);
        } catch (e) {
            const { controller, method, type } = parsePostParameter(typeOrEndPoint, endPointOrBody);
            const obj = {
                message: e.message,
                details: {
                    Exception: e,
                    Type: type,
                    Controller: controller,
                    Method: method
                }
            };
            if (this.errorHandler) return await this.errorHandler(e);

            switch (e.status) {
                case 401:
                    Object.keys(localStorage).forEach(key => {
                        switch (key) {
                            case 'store':
                            case 'workstation':
                                break;
                            default:
                                delete localStorage[key];
                                break;
                        }
                    });
                    this.router.navigate(['/login']);
                    break;
                case 404:
                    this.dialogs.error({ title: 'Not Found', message: `The requested ${type} does not exist.` });
                    break;
                default:
                    this.dialogs.error(obj);
                    throw e;
            }
        } finally {
            requesting$.next(false);
        }
    }
    withErrorHandler(
        handler: this['errorHandler']
    ) {
        return (
            Reflect.construct(HttpService, [this.router, this.global, handler])
        );
    }
    async get(endPoint: string | EndPoint) {
        requesting$.next(true);
        try {
          if (typeof endPoint === 'string' && endPoint.startsWith('http')) {
            console.log("hit");
                return await fetch(endPoint, {
                    mode: 'cors',
                    credentials: 'omit',
                    cache: 'no-cache',
                    headers: createHeaders()
                });
            }
            return await get(endPoint);
        } finally {
            requesting$.next(false);
        }
    }

    async delete(url: string) {
        requesting$.next(true);
        try {
            return await this.fetch(`${env.endpointBaseUrl}/${url}`, {
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-cache',
                method: 'DELETE',
                headers: createHeaders()
            });
        } finally {
            requesting$.next(false);
        }
  }


    async fetch(input: RequestInfo, init?: RequestInit) {
        const headers = createHeaders();
        requesting$.next(true);
        try {
            const response = await fetch(typeof input === 'string' && input.startsWith('http') ? input : `${env.endpointBaseUrl}/${input}`, {
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: {
                    ...init && init.headers,
                    ...headers,
                    'Content-Type': 'application/json'
                },
                ...init
            });
            if (response.ok)
                return response;

            const errorText = await response.text();
            let error;
            try {
                error = JSON.parse(errorText);
            } catch { }
            throw Error(
                (error &&
                    (error.message ||
                        error.exceptionMessage ||
                        error.ExceptionMessage)) ||
                errorText ||
                response.statusText
            );
        } finally {
            requesting$.next(false);
        }
    }
    get requesting$() {
        return requesting$;
    }
}
async function get(endPoint: string | EndPoint) {
  const { controller, method } = typeof endPoint === 'string' ? { method: undefined, controller: undefined } : endPoint;
  const response = await makeRequest(controller, method, undefined, undefined, "GET");

  return await processResponse(response);
}
function parsePostParameter(typeOrEndPoint: string | EndPoint, endPointOrBody: EndPoint | object) {
  // tslint:disable-next-line: no-unnecessary-initializer
  const { controller = undefined, method = undefined } = typeof typeOrEndPoint !== 'string' ? typeOrEndPoint : 'method' in endPointOrBody ? endPointOrBody : {};
  const type = typeof typeOrEndPoint === 'string' ? typeOrEndPoint : undefined;
  return { controller, method, type };
}
async function makeRequest(controller?: string, method?: string, postBody?: object, type?: string, httpMethod?: "GET" | "POST" | "PUT" | "PATCH", user?: User, token?: string) {
  if (env.verbose)
    console.log(JSON.stringify({ ...postBody, Method: method, Controller: controller, Type: type ? type.startsWith('MLC.Data.Models.') ? type : `MLC.Data.Models.${type}` : undefined }));
  let headers: HeadersInit = {
    "Content-Type": "Application/JSON"
  };
  const store = getStore(user);
  if (token) headers = { ...headers, User: token };
  if (store) headers = { ...headers, Store: user.Person.Customer.Store.ID.toString() };
  let request: RequestInit = {
    method: httpMethod,
    headers
  };
  if (postBody && method !== "GET") {
    request = {
      ...request,
      body: JSON.stringify({
        ...postBody, Method: method,
        Controller: controller,
        Type: type
          ? type.startsWith('MLC.Data.Models.') ? type
            : `MLC.Data.Models.${type}` : undefined
      })
    };
  }
  return await fetch(`${env.endpointBaseUrl}/${controller}/${method}`, request);
}
async function processResponse(response: Response) {
  if (response.ok) {
    switch (response.status) {
      case 204:
        return;
      default:
        const data = await response.json();
        if (env.verbose) {
          if (data.Result)
            console.info('Result: ', data.Result);
          if (data.Error)
            console.info('Error: ', data.Error);
        }
        if (data.Error && !data.Result) {
          throw { status: response.status < 400 ? 400 : response.status, message: data.Error.Message || data.Error.Description || data.Error.Name };
        }
        return data.Result ?? data;
    }
  } else {
    let data: { ExceptionMessage?} = {};
    // Attempt to extract detailed errors in JSON format with no expectation of success.
    try { data = await response.json(); } catch { } //
    throw { status: response.status, message: "ExceptionMessage" in data ? data.ExceptionMessage : response.statusText, data };
  }
}

function getToken(user : User) {
  if (user)
    return user.Token;
}
function getStore(user : User) {
  if (user && user.Person && user.Person.Customer && user.Person.Customer.Store)
    return user.Person.Customer.Store.ID;

}
function createHeaders(): HeadersInit {
  var user: User | undefined;
  this.storage.get('user').then(result => {
    if (result != null) {
      const userJson = result;
      console.log(result);
      if (userJson) {
        user = JSON.parse(userJson) as User;
        console.log(result);
      }
    }
  })
    const token = user.Token;
    const store = user.Person.Customer.Store.ID.toString();
    let headers: HeadersInit = {};
    if (token)
        headers = { ...headers, User: token };
    if (store)
        headers = { ...headers, Store: store };
    return headers;
}
