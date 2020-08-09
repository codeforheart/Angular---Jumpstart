(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/customer/create-order/create-order.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/create-order/create-order.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");








const _c0 = ["createOrderForm"];
const _c1 = ["mapsContainer"];
function CreateOrderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Create Order for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx_r1.customer.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx_r1.customer.lastName), "");
} }
function CreateOrderComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateOrderComponent_tr_19_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.handleProductAdd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateOrderComponent_tr_19_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const i_r5 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.staticProductsData[i_r5].quantity = $event; })("change", function CreateOrderComponent_tr_19_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.updateSumOfOrders($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function CreateOrderComponent_tr_19_Template_button_mousedown_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.handleProductAdd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.value === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.staticProductsData[i_r5].quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r6.value === "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r4.itemCost);
} }
function CreateOrderComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
} }
class CreateOrderComponent {
    constructor(route, dataService, componentFactoryResolver) {
        this.route = route;
        this.dataService = dataService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.counter = 0;
        this.sumOfAmountToPay = 0;
        CreateOrderComponent.products = [
            {
                'productName': 'bamba',
                'itemCost': 3.50,
                'quantity': 0
            },
            {
                'productName': 'bisli',
                'itemCost': 3.20,
                'quantity': 0
            },
            {
                'productName': 'chips',
                'itemCost': 3.10,
                'quantity': 0
            }
        ];
    }
    indexTracker(index, value) {
        return index;
    }
    get staticProductsData() {
        return CreateOrderComponent.products;
    }
    get sumOfOrders() {
        const sum = 0;
        const products = CreateOrderComponent.products;
        const productsQuantities = products.map((item) => {
            return item.quantity;
        });
        return productsQuantities.reduce((a, b) => a + b, 0);
    }
    ngOnInit() {
        // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            if (id) {
                this.dataService.getCustomer(id)
                    .subscribe((customer) => {
                    this.customer = customer;
                });
            }
        });
    }
    updateSumOfOrders(e) {
        this.sumOfOrders();
    }
    handleProductAdd(e) {
        const { currentTarget } = e;
        const eName = currentTarget.name;
        const eType = currentTarget.dataset.type;
        const updatedProduct = CreateOrderComponent.products.find((item) => item.productName === eName);
        if (eType === 'plus') {
            updatedProduct.quantity += 1;
            this.sumOfAmountToPay += updatedProduct.itemCost;
        }
        else {
            updatedProduct.quantity -= 1;
            this.sumOfAmountToPay -= updatedProduct.itemCost;
            if (this.sumOfAmountToPay < 1) {
                this.sumOfAmountToPay = 0;
            }
        }
    }
    lazyLoadMapComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.mapsViewContainerRef.length) {
                // Lazy load MapComponent
                const { MapComponent } = yield __webpack_require__.e(/*! import() | shared-map-map-component */ "shared-map-map-component").then(__webpack_require__.bind(null, /*! ../../shared/map/map.component */ "./src/app/shared/map/map.component.ts"));
                console.log('Lazy loaded map component!');
                const component = this.componentFactoryResolver.resolveComponentFactory(MapComponent);
                this.mapComponentRef = this.mapsViewContainerRef.createComponent(component);
                this.mapComponentRef.instance.zoom = 10;
                this.mapComponentRef.instance.customer = this.customer;
                this.mapComponentRef.instance.enabled = true;
            }
        });
    }
    submit() {
        this.createOrderForm.form.markAsPristine();
    }
}
CreateOrderComponent.ɵfac = function CreateOrderComponent_Factory(t) { return new (t || CreateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
CreateOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateOrderComponent, selectors: [["cm-create-order"]], viewQuery: function CreateOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.createOrderForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapsViewContainerRef = _t.first);
    } }, decls: 34, vars: 7, consts: [["create-order-form", "novalidate", 1, "create-order-form", 3, "ngSubmit"], ["createOrderForm", "ngForm"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "products-container"], [1, "products-table", "table", "table-hover"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "alert alert-danger", 4, "ngIf"], [1, "sm-col-6"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "input-group"], [1, "input-group-btn"], ["type", "button", "data-type", "minus", "data-field", "", 1, "btn", "btn-default", "btn-number", 3, "name", "disabled", "click"], [1, "glyphicon", "glyphicon-minus"], ["type", "text", "value", "0", "min", "0", "max", "10", 1, "form-control", "input-number", 3, "name", "ngModel", "ngModelChange", "change"], ["quantityInput", ""], ["type", "button", "data-type", "plus", "data-field", "", 1, "btn", "btn-default", "btn-number", 3, "name", "disabled", "mousedown"], [1, "glyphicon", "glyphicon-plus"], [1, "alert", "alert-danger"]], template: function CreateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateOrderComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateOrderComponent_div_3_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CreateOrderComponent_tr_19_Template, 16, 8, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CreateOrderComponent_div_20_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Amount of products: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Amount to pay: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.staticProductsData)("ngForTrackBy", ctx.indexTracker);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sumOfOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sumOfAmountToPay.toFixed(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.sumOfOrders === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"]], styles: [".details-image[_ngcontent-%COMP%] {\n    height:100px;width:100px;margin-top:10px;\n}\n\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 30%;\n}\n\n.products-table[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.products-table[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.input-group-btn[_ngcontent-%COMP%]:last-child > .btn[_ngcontent-%COMP%], .input-group-btn[_ngcontent-%COMP%]:last-child > .btn-group[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3JlYXRlLW9yZGVyL2NyZWF0ZS1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWSxDQUFDLFdBQVcsQ0FBQyxlQUFlO0FBQzVDOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jcmVhdGUtb3JkZXIvY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1pbWFnZSB7XG4gICAgaGVpZ2h0OjEwMHB4O3dpZHRoOjEwMHB4O21hcmdpbi10b3A6MTBweDtcbn1cblxuLnByb2R1Y3RzLXRhYmxlIHRoLFxuLnByb2R1Y3RzLXRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByb2R1Y3RzLXRhYmxlIHRoOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5wcm9kdWN0cy10YWJsZSAuaW5wdXQtZ3JvdXAgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucHJvZHVjdHMtdGFibGUgLmlucHV0LWdyb3VwIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmJ0biwgLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cm-create-order',
                templateUrl: './create-order.component.html',
                styleUrls: ['./create-order.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { createOrderForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['createOrderForm', { static: true }]
        }], mapsViewContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mapsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");







const _c0 = ["mapsContainer"];
function CustomerDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, ctx_r0.customer.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, ctx_r0.customer.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, ctx_r0.customer.lastName), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.customer.city, ", ", ctx_r0.customer.state.name, " ");
} }
function CustomerDetailsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No customer found\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CustomerDetailsComponent {
    constructor(route, dataService, componentFactoryResolver) {
        this.route = route;
        this.dataService = dataService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            if (id) {
                this.dataService.getCustomer(id)
                    .subscribe((customer) => {
                    this.customer = customer;
                    if (this.customer && this.customer.latitude) {
                        this.lazyLoadMapComponent();
                        // this.mapEnabled = true; // For eager loading map
                    }
                });
            }
        });
    }
    lazyLoadMapComponent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.mapsViewContainerRef.length) {
                // Lazy load MapComponent
                const { MapComponent } = yield __webpack_require__.e(/*! import() | shared-map-map-component */ "shared-map-map-component").then(__webpack_require__.bind(null, /*! ../../shared/map/map.component */ "./src/app/shared/map/map.component.ts"));
                console.log('Lazy loaded map component!');
                const component = this.componentFactoryResolver.resolveComponentFactory(MapComponent);
                this.mapComponentRef = this.mapsViewContainerRef.createComponent(component);
                this.mapComponentRef.instance.zoom = 10;
                this.mapComponentRef.instance.customer = this.customer;
                this.mapComponentRef.instance.enabled = true;
            }
        });
    }
}
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerDetailsComponent, selectors: [["cm-customer-details"]], viewQuery: function CustomerDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapsViewContainerRef = _t.first);
    } }, decls: 10, vars: 2, consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["mapsContainer", ""], ["class", "container", 4, "ngIf"], [1, "col-md-2"], [1, "details-image", 3, "src"], [1, "col-md-10"]], template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerDetailsComponent_div_1_Template, 13, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](7, null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CustomerDetailsComponent_div_9_Template, 2, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.customer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"], _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"]], styles: [".details-image[_ngcontent-%COMP%] {\n    height:100px;width:100px;margin-top:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWU7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWltYWdlIHtcbiAgICBoZWlnaHQ6MTAwcHg7d2lkdGg6MTAwcHg7bWFyZ2luLXRvcDoxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'cm-customer-details',
                templateUrl: './customer-details.component.html',
                styleUrls: ['./customer-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { mapsViewContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mapsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/modal/modal.service */ "./src/app/core/modal/modal.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










const _c0 = ["customerForm"];
function CustomerEditComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r8.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r8.name);
} }
function CustomerEditComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete Customer?\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_div_1_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.delete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.deleteMessageEnabled = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerEditComponent_div_36_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.deleteMessageEnabled = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerEditComponent_div_36_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerEditComponent_div_36_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.cancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.pristine || !_r0.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.operationText);
} }
function CustomerEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerEditComponent_div_36_div_1_Template, 7, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerEditComponent_div_36_button_2_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomerEditComponent_div_36_div_4_Template, 6, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.customer.id && ctx_r6.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.customer.id && !ctx_r6.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.deleteMessageEnabled);
} }
function CustomerEditComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMessage);
} }
class CustomerEditComponent {
    constructor(router, route, dataService, growler, modalService, logger) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.modalService = modalService;
        this.logger = logger;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        // Subscribe to params so if it changes we pick it up. Don't technically need that here
        // since param won't be changing while component is alive.
        // Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            if (id !== 0) {
                this.operationText = 'Update';
                this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    getCustomer(id) {
        this.dataService.getCustomer(id).subscribe((customer) => {
            this.customer = customer;
        });
    }
    submit() {
        if (this.customer.id === 0) {
            this.dataService.insertCustomer(this.customer)
                .subscribe((insertedCustomer) => {
                if (insertedCustomer) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    this.customerForm.form.markAsPristine();
                    this.router.navigate(['/customers']);
                }
                else {
                    const msg = 'Unable to insert customer';
                    this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerMessageType"].Danger);
                    this.errorMessage = msg;
                }
            }, (err) => this.logger.log(err));
        }
        else {
            this.dataService.updateCustomer(this.customer)
                .subscribe((status) => {
                if (status) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    this.customerForm.form.markAsPristine();
                    this.growler.growl('Operation performed successfully.', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerMessageType"].Success);
                    // this.router.navigate(['/customers']);
                }
                else {
                    const msg = 'Unable to update customer';
                    this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerMessageType"].Danger);
                    this.errorMessage = msg;
                }
            }, (err) => this.logger.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        // Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/customers']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => this.logger.log(err));
    }
    canDeactivate() {
        if (!this.customerForm.dirty) {
            return true;
        }
        // Dirty show display modal dialog to user to confirm leaving
        const modalContent = {
            header: 'Lose Unsaved Changes?',
            body: 'You have unsaved changes! Would you like to leave the page and lose them?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'Leave'
        };
        return this.modalService.show(modalContent);
    }
}
CustomerEditComponent.ɵfac = function CustomerEditComponent_Factory(t) { return new (t || CustomerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"])); };
CustomerEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerEditComponent, selectors: [["cm-customer-edit"]], viewQuery: function CustomerEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customerForm = _t.first);
    } }, decls: 39, vars: 12, consts: [["novalidate", "", 1, "customer-form", 3, "ngSubmit"], ["customerForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "text", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "text", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["name", "state", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngValue"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-default", 3, "click"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"]], template: function CustomerEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerEditComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_6_listener($event) { return ctx.customer.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.customer.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_20_listener($event) { return ctx.customer.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_27_listener($event) { return ctx.customer.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "City is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_Template_select_ngModelChange_34_listener($event) { return ctx.customer.state.abbreviation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CustomerEditComponent_option_35_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CustomerEditComponent_div_36_Template, 5, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CustomerEditComponent_div_37_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.pristine || _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.pristine || _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.pristine || _r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r4.pristine || _r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer.state.abbreviation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: [".customer-form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type='number'][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .customer-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width:100%;\n}\n\n.customer-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-left: 5px solid #a94442;\n}\n\n.customer-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZWRpdC9jdXN0b21lci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7SUFJSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSdudW1iZXInXSxcbi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4uY3VzdG9tZXItZm9ybSBzZWxlY3Qge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5jdXN0b21lci1mb3JtIC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xufVxuXG4uY3VzdG9tZXItZm9ybSAubmctdmFsaWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-customer-edit',
                templateUrl: './customer-edit.component.html',
                styleUrls: ['./customer-edit.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"] }, { type: _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }, { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }]; }, { customerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['customerForm', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/customer/customer-orders/customer-orders.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-orders/customer-orders.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersComponent", function() { return CustomerOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");






function CustomerOrdersComponent_div_1_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, order_r4.itemCost, "USD", "symbol"));
} }
function CustomerOrdersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomerOrdersComponent_div_1_tr_7_Template, 6, 6, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Orders for ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r0.customer.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r0.customer.lastName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customer.orders)("ngForTrackBy", ctx_r0.ordersTrackBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 9, ctx_r0.customer.orderTotal, "USD", "symbol"));
} }
function CustomerOrdersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No orders found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomerOrdersComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No customer found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CustomerOrdersComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.orders = [];
    }
    ngOnInit() {
        // Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe((params) => {
            const id = +params['id'];
            this.dataService.getCustomer(id).subscribe((customer) => {
                this.customer = customer;
            });
        });
    }
    ordersTrackBy(index, orderItem) {
        return index;
    }
}
CustomerOrdersComponent.ɵfac = function CustomerOrdersComponent_Factory(t) { return new (t || CustomerOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
CustomerOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerOrdersComponent, selectors: [["cm-customer-orders"]], decls: 4, vars: 3, consts: [[1, "container"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "table", "table-striped", "table-hover", "orders-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "summary-border"], [1, "text-right"]], template: function CustomerOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerOrdersComponent_div_1_Template, 14, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerOrdersComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerOrdersComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer && ctx.customer.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customer && !ctx.customer.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_shared_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-customer-orders',
                templateUrl: './customer-orders.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-orders/customer-orders.component */ "./src/app/customer/customer-orders/customer-orders.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-order/create-order.component */ "./src/app/customer/create-order/create-order.component.ts");
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/can-activate.guard */ "./src/app/customer/guards/can-activate.guard.ts");
/* harmony import */ var _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/can-deactivate.guard */ "./src/app/customer/guards/can-deactivate.guard.ts");











const routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
        children: [
            { path: 'orders', component: _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_3__["CustomerOrdersComponent"] },
            { path: 'details', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"] },
            { path: 'createOrder', component: _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrderComponent"] },
            {
                path: 'edit',
                component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"],
                canActivate: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuard"]],
                canDeactivate: [_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"]]
            }
        ]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.components = [_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"], _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_3__["CustomerOrdersComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"], _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"], _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrderComponent"]];
CustomerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); }, providers: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuard"], _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuard"], _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



class CustomerComponent {
    // displayMode: CustomerDisplayModeEnum;
    // displayModeEnum = CustomerDisplayModeEnum;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // No longer needed due to routerLinkActive feature in Angular
        // const path = this.router.url.split('/')[3];
        // switch (path) {
        //   case 'details':
        //     this.displayMode = CustomerDisplayModeEnum.Details;
        //     break;
        //   case 'orders':
        //     this.displayMode = CustomerDisplayModeEnum.Orders;
        //     break;
        //   case 'edit':
        //     this.displayMode = CustomerDisplayModeEnum.Edit;
        //     break;
        // }
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["cm-orders"]], decls: 31, vars: 0, consts: [[1, "orders", "view"], [1, "container"], [1, "glyphicon", "glyphicon-user"], [1, "navbar"], [1, "nav", "navbar-nav"], [1, "toolbar-item"], ["routerLink", "details", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-list"], ["routerLink", "orders", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-tags"], ["routerLink", "edit", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-edit"], ["routerLink", "createOrder", "routerLinkActive", "active"], [1, "glyphicon", "glyphicon-shopping-cart"], ["routerLink", "/customers"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0Customer Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0Customer Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0\u00A0Customer Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u00A0Edit Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u00A0Create Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "View all Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-orders',
                templateUrl: './customer.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-orders/customer-orders.component */ "./src/app/customer/customer-orders/customer-orders.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-order/create-order.component */ "./src/app/customer/create-order/create-order.component.ts");









class CustomerModule {
}
CustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomerModule_Factory(t) { return new (t || CustomerModule)(); }, imports: [[_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__["CustomerOrdersComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"], _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditComponent"], _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_7__["CreateOrderComponent"]], imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"].components]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/customer/guards/can-activate.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/guards/can-activate.guard.ts ***!
  \*******************************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




class CanActivateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        // Track URL user is trying to go to so we can send them there after logging in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}
CanActivateGuard.ɵfac = function CanActivateGuard_Factory(t) { return new (t || CanActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CanActivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivateGuard, factory: CanActivateGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanActivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customer/guards/can-deactivate.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/customer/guards/can-deactivate.guard.ts ***!
  \*********************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");



class CanDeactivateGuard {
    constructor(logger) {
        this.logger = logger;
    }
    canDeactivate(component, route, state) {
        this.logger.log(`CustomerId: ${route.parent.params['id']} URL: ${state.url}`);
        // Check with component to see if we're able to deactivate
        return component.canDeactivate();
    }
}
CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) { return new (t || CanDeactivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"])); };
CanDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateGuard, factory: CanDeactivateGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanDeactivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map