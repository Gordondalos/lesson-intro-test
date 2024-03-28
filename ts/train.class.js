"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainClass = void 0;
var mechanoClass_1 = require("./mechanoClass");
var TrainClass = /** @class */ (function (_super) {
    __extends(TrainClass, _super);
    function TrainClass(w, c) {
        var _this = _super.call(this, w, c) || this;
        _this.wheels = w;
        _this.color = c;
        return _this;
    }
    TrainClass.prototype.beep = function (countBeep) {
        console.log('beep from train');
    };
    return TrainClass;
}(mechanoClass_1.MechanoClass));
exports.TrainClass = TrainClass;
