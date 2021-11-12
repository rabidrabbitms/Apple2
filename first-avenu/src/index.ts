import './index.scss';
import { bootloader, hmrModule } from '@angularclass/hmr';
import 'promise.allsettled';
import 'element.prototype.matches';
import 'core-js';
import 'zone.js';
import 'whatwg-fetch';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from 'src/app/app.module';
import env from 'src/env/staging';

if (env) {
    enableProdMode();
    // tslint:disable-next-line: no-floating-promises
    (async function () {
        try {
            await platformBrowserDynamic().bootstrapModule(AppModule);
        } catch (e) {
            console.error(e);
        }
    })();
} else {
    bootloader(main);
}
export async function main() {
    const ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppModule);
    // use `hmrModule` or the "@angularclass/hmr-loader"

    return await hmrModule(ngModuleRef, module);
}
