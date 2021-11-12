'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Uid = /** @class */ (function (_super) {
    tslib.__extends(Uid, _super);
    function Uid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Uid.prototype, "UUID", {
        get: function () { return core.cordovaPropertyGet(this, "UUID"); },
        set: function (value) { core.cordovaPropertySet(this, "UUID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMEI", {
        get: function () { return core.cordovaPropertyGet(this, "IMEI"); },
        set: function (value) { core.cordovaPropertySet(this, "IMEI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMSI", {
        get: function () { return core.cordovaPropertyGet(this, "IMSI"); },
        set: function (value) { core.cordovaPropertySet(this, "IMSI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "ICCID", {
        get: function () { return core.cordovaPropertyGet(this, "ICCID"); },
        set: function (value) { core.cordovaPropertySet(this, "ICCID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "MAC", {
        get: function () { return core.cordovaPropertyGet(this, "MAC"); },
        set: function (value) { core.cordovaPropertySet(this, "MAC", value); },
        enumerable: false,
        configurable: true
    });
    Uid.pluginName = "Uid";
    Uid.plugin = "cordova-plugin-uid";
    Uid.pluginRef = "cordova.plugins.uid";
    Uid.repo = "https://github.com/lionelhe/cordova-plugin-uid";
    Uid.platforms = ["Android"];
    Uid.decorators = [
        { type: core$1.Injectable }
    ];
    return Uid;
}(core.IonicNativePlugin));

exports.Uid = Uid;
