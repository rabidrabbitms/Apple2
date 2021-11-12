import { TemplateRef } from '@angular/core';
import { NgbModalOptions, NgbModalRef as NgbNgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";

export { };

declare module '@angular/router' {
  interface ParamMap {
    has<P extends string>(name: P): this is this & { get(name: P): string };
  }
}

declare module '@angular/forms/forms' {
  type V = (c: AbstractControl) => VR;
  type VR =
    | { [key: string]: any }
    | null
    | undefined;
  type AV = (c: AbstractControl) => Promise<VR> | Observable<VR>;
  type ValueType<T> = T extends [undefined, any?, any?]
    ? any
    : T extends [infer A, any?, any?]
    ? A
    : any;
  type TypedControl<C> = Overwrite<
    C extends FormArray ? C : AbstractControl,
    'value',
    ValueType<C>
  >;
  interface FormBuilder {
    group<C extends { [key: string]: | FormArray | AbstractControl | [any?, (V | V[])?, (AV | AV[])?] }>(
      controlsConfig: C,
      options?:
        | AbstractControlOptions
        | { [key: string]: any }
        | null
        | undefined
    ): Replace<
      FormGroup,
      {
        controls: { [P in keyof C]: TypedControl<C[P]> },
        value: { [P in keyof C]: C[P] extends FormArray ? any[] : ValueType<C[P]> },
        setValue(
          value: { [P in keyof C]: ValueType<C[P]> | undefined },
          options?: {
            onlySelf?: boolean,
            emitEvent?: boolean,
            emitModelToViewChange?: boolean,
            emitViewToModelChange?: boolean,
          }
        ): void;
      }
    >;
  }

  interface FormArray {
    push(control: ReturnType<FormBuilder['group']>): void;
  }
}
declare module '@ng-bootstrap/ng-bootstrap/modal/modal' {
  interface NgbModal {
    open<T>(content: T, options?: NgbModalOptions): NgbModalRef<T>;
    open(content: TemplateRef<any>, options?: NgbModalOptions): NgbNgbModalRef;
  }
  interface NgbModalRef<T> extends NgbNgbModalRef { componentInstance: T extends (new (...args) => infer A) ? A : never }
}


declare global {
  namespace Reflect {
    function construct<C extends new (...args: any[]) => T, T>(target: C extends new (...args: infer A) => any ? C : never, argumentsList: ConstructorParameters<C>, newTarget?: any): T;
  }

  interface Array<T> {
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    some(
      callbackfn: (value: T, index: number, array: T[]) => any,
      thisArg?: any
    ): boolean;
    find(
      predicate: (value: T, index: number, obj: T[]) => boolean | undefined,
      thisArg?: any
    ): T | undefined;
    find<S extends T>(
      predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
      thisArg?: any
    ): S | undefined;
  }

  interface Navigator {
    share(data: {
      title: string | undefined
      text: string | undefined,
      url: string | undefined,
    }): Promise<void>;
  }
  interface Window {
    dataLayer: any[];
  }
  interface Storage {
    /**
       * A serialized representation of the authenticated `User`
       */
    easyPayUser?: string;
    /**
     * A serialized representation of the authenticated `User`
     */
    user?: string;
    Contract?: string;
    loanRequest?: string;
    application?: string;
  }

  type AllSettledResults<T> = {
    [P in keyof T]: { status: 'resolved', value: T[P] } | { status: 'rejected', reason: any }
  };
  interface PromiseConstructor {
    /**
   * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
    allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<AllSettledResults<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<AllSettledResults<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3, T4, T5, T6, T7, T8>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<AllSettledResults<[T1, T2, T3, T4, T5, T6, T7, T8]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3, T4, T5, T6, T7>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<AllSettledResults<[T1, T2, T3, T4, T5, T6, T7]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3, T4, T5, T6>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<AllSettledResults<[T1, T2, T3, T4, T5, T6]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3, T4, T5>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<AllSettledResults<[T1, T2, T3, T4, T5]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3, T4>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<AllSettledResults<[T1, T2, T3, T4]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2, T3>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<AllSettledResults<[T1, T2, T3]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T1, T2>(values: readonly [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<AllSettledResults<[T1, T2]>>;

    /**
     * Creates a Promise that is resolved after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    allSettled<T>(values: readonly (T | PromiseLike<T>)[]): Promise<AllSettledResults<T[]>>;
  }
  interface FBInitParams {
    autoLogAppEvents?: boolean;
  }

  interface ShareDialogParams {
    quote?: string;
  }

  type Overwrite<T, K extends keyof T, V> = Omit<T, K> & { [P in K]: V };
  type Replace<T, R> = keyof R extends keyof T
    ? { [P in keyof Pick<T, Exclude<keyof T, keyof R>>]: T[P] } &
    { [P in keyof R]: R[P] }
    : never;
  type ElementType<T> = T extends Array<infer E> ? E : T;
}