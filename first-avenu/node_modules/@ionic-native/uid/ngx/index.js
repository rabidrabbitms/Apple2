import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var Uid = /** @class */ (function (_super) {
    __extends(Uid, _super);
    function Uid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Uid.prototype, "UUID", {
        get: function () { return cordovaPropertyGet(this, "UUID"); },
        set: function (value) { cordovaPropertySet(this, "UUID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMEI", {
        get: function () { return cordovaPropertyGet(this, "IMEI"); },
        set: function (value) { cordovaPropertySet(this, "IMEI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "IMSI", {
        get: function () { return cordovaPropertyGet(this, "IMSI"); },
        set: function (value) { cordovaPropertySet(this, "IMSI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "ICCID", {
        get: function () { return cordovaPropertyGet(this, "ICCID"); },
        set: function (value) { cordovaPropertySet(this, "ICCID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Uid.prototype, "MAC", {
        get: function () { return cordovaPropertyGet(this, "MAC"); },
        set: function (value) { cordovaPropertySet(this, "MAC", value); },
        enumerable: false,
        configurable: true
    });
    Uid.pluginName = "Uid";
    Uid.plugin = "cordova-plugin-uid";
    Uid.pluginRef = "cordova.plugins.uid";
    Uid.repo = "https://github.com/lionelhe/cordova-plugin-uid";
    Uid.platforms = ["Android"];
    Uid.decorators = [
        { type: Injectable }
    ];
    return Uid;
}(IonicNativePlugin));
export { Uid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3VpZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE2Q3ZELHVCQUFpQjs7OzswQkFHeEMscUJBQUk7Ozs7OzswQkFJSixxQkFBSTs7Ozs7OzBCQUlKLHFCQUFJOzs7Ozs7MEJBSUosc0JBQUs7Ozs7OzswQkFJTCxvQkFBRzs7Ozs7Ozs7Ozs7O2dCQXBCSixVQUFVOztjQTdDWDtFQThDeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFVpZFxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdW5pcXVlIGlkZW50aWZpZXJzOiBVVUlELCBJTUVJLCBJTVNJLCBJQ0NJRCBhbmQgTUFDLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgVWlkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS91aWQvbmd4JztcbiAqIGltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdWlkOiBVaWQsIHByaXZhdGUgYW5kcm9pZFBlcm1pc3Npb25zOiBBbmRyb2lkUGVybWlzc2lvbnMpIHsgfVxuICpcbiAqXG4gKiBhc3luYyBnZXRJbWVpKCkge1xuICogIGNvbnN0IHsgaGFzUGVybWlzc2lvbiB9ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxuICogICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5SRUFEX1BIT05FX1NUQVRFXG4gKiAgKTtcbiAqXG4gKiAgaWYgKCFoYXNQZXJtaXNzaW9uKSB7XG4gKiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcbiAqICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5SRUFEX1BIT05FX1NUQVRFXG4gKiAgICApO1xuICpcbiAqICAgIGlmICghcmVzdWx0Lmhhc1Blcm1pc3Npb24pIHtcbiAqICAgICAgdGhyb3cgbmV3IEVycm9yKCdQZXJtaXNzaW9ucyByZXF1aXJlZCcpO1xuICogICAgfVxuICpcbiAqICAgIC8vIG9rLCBhIHVzZXIgZ2F2ZSB1cyBwZXJtaXNzaW9uLCB3ZSBjYW4gZ2V0IGhpbSBpZGVudGlmaWVycyBhZnRlciByZXN0YXJ0IGFwcFxuICogICAgcmV0dXJuO1xuICogIH1cbiAqXG4gKiAgIHJldHVybiB0aGlzLnVpZC5JTUVJXG4gKiB9XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdVaWQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi11aWQnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMudWlkJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9saW9uZWxoZS9jb3Jkb3ZhLXBsdWdpbi11aWQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVaWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKiBHZXQgdGhlIGRldmljZSBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoVVVJRCkuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBVVUlEOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlIEludGVybmF0aW9uYWwgTW9iaWxlIFN0YXRpb24gRXF1aXBtZW50IElkZW50aXR5IChJTUVJKS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElNRUk6IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UgSW50ZXJuYXRpb25hbCBtb2JpbGUgU3Vic2NyaWJlciBJZGVudGl0eSAoSU1TSSkuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBJTVNJOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgc2ltIEludGVncmF0ZWQgQ2lyY3VpdCBDYXJkIElkZW50aWZpZXIgKElDQ0lEKS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIElDQ0lEOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgTWVkaWEgQWNjZXNzIENvbnRyb2wgYWRkcmVzcyAoTUFDKS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BQzogc3RyaW5nO1xufVxuIl19