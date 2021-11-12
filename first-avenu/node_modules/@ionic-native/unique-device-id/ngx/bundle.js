'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');

var UniqueDeviceID = /** @class */ (function (_super) {
    tslib.__extends(UniqueDeviceID, _super);
    function UniqueDeviceID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniqueDeviceID.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    UniqueDeviceID.pluginName = "UniqueDeviceID";
    UniqueDeviceID.plugin = "cordova-plugin-uniquedeviceid";
    UniqueDeviceID.pluginRef = "window.plugins.uniqueDeviceID";
    UniqueDeviceID.repo = "https://github.com/Paldom/UniqueDeviceID";
    UniqueDeviceID.platforms = ["Android", "iOS", "Windows Phone 8"];
    UniqueDeviceID.decorators = [
        { type: core$1.Injectable }
    ];
    return UniqueDeviceID;
}(core.IonicNativePlugin));

exports.UniqueDeviceID = UniqueDeviceID;
