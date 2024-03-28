"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanoClass = void 0;
var MechanoClass = /** @class */ (function () {
    function MechanoClass(w, c) {
        this.wheels = w;
        this.color = c;
    }
    MechanoClass.prototype.beep = function (count) {
        console.log('beep mechano');
    };
    return MechanoClass;
}());
exports.MechanoClass = MechanoClass;
