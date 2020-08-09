import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ICustomer, IProducts } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';
import {GrowlerMessageType} from '../../core/growler/growler.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'cm-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  static products;
  customer: ICustomer;
  // products: IProducts;
  mapEnabled: boolean;
  mapComponentRef: ComponentRef<any>;
  errorMessage: string;
  @ViewChild('createOrderForm', { static: true }) createOrderForm: NgForm;
  @ViewChild('mapsContainer', { read: ViewContainerRef })
  private mapsViewContainerRef: ViewContainerRef;
  public counter: number = 0;
  public sumOfAmountToPay: number = 0;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver) {
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

  indexTracker(index: number, value: any) {
    return index;
  }

   get staticProductsData() {
    return CreateOrderComponent.products;
  }
  get sumOfOrders() {
    const sum = 0;
    const products = CreateOrderComponent.products
    const productsQuantities = products.map((item) => {
      return item.quantity;
    });
    return productsQuantities.reduce((a, b) => a + b, 0);
  }
  ngOnInit() {
    // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.dataService.getCustomer(id)
          .subscribe((customer: ICustomer) => {
            this.customer = customer;
          });
      }
    });
  }

  updateSumOfOrders(e) {
    this.sumOfOrders();
  }

  handleProductAdd(e) {
    const {currentTarget} = e;
    const eName = currentTarget.name;
    const eType = currentTarget.dataset.type;

    const updatedProduct = CreateOrderComponent.products.find((item) => item.productName === eName);
    if (eType === 'plus') {
      updatedProduct.quantity += 1;
      this.sumOfAmountToPay += updatedProduct.itemCost;
    } else {
      updatedProduct.quantity -= 1;
      this.sumOfAmountToPay -= updatedProduct.itemCost;
      if (this.sumOfAmountToPay < 1) {
        this.sumOfAmountToPay = 0;
      }
    }
  }

  submit() {
    this.createOrderForm.form.markAsPristine();
  }
}
