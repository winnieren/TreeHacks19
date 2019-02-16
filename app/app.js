/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-hello-world",
        emphasis: "esri-hello-world--emphasis"
    };
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            //----------------------------------
            //  firstName
            //----------------------------------
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.firstName = "John";
            //----------------------------------
            //  lastName
            //----------------------------------
            _this.lastName = "Smith";
            //----------------------------------
            //  emphasized
            //----------------------------------
            _this.emphasized = false;
            return _this;
        }
        // Public method
        App.prototype.render = function () {
            var _a;
            var greeting = this._getGreeting();
            var classes = (_a = {},
                _a[CSS.emphasis] = this.emphasized,
                _a);
            return (widget_1.tsx("div", { class: this.classes(CSS.base, classes) }, greeting));
        };
        ;
        // Private method
        App.prototype._getGreeting = function () {
            return "Hello, my name is " + this.firstName + " " + this.lastName + "!";
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], App.prototype, "firstName", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], App.prototype, "lastName", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], App.prototype, "emphasized", void 0);
        App = __decorate([
            decorators_1.subclass("esri.widgets.app")
        ], App);
        return App;
    }(decorators_1.declared(Widget)));
    return App;
});
//# sourceMappingURL=app.js.map