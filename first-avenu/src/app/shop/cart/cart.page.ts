import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage'
import ModelService from '../../services/model.service';


@Component({
  selector: 'cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss']
})

export class CartPage implements OnInit {
  constructor(public storage: Storage,
              public router: Router,
              public models: ModelService,
              private route: ActivatedRoute) {
  }
 
  items: Array<any>
  itemCount;
  total: number;
  totalPayments: number;
  totalCashPrice: number;
  user;
  customer;

  async ngOnInit() {
    this.items = await this.storage.get(`Cart`);
    this.user = await this.storage.get(`user`);
    if (this.user != undefined) {
      this.customer = this.models.byID('Customer', this.user);
    }
    this.itemCount = this.items.length;
    this.total = this.totalPrice();
    this.totalPayments = this.totalPayment();
    this.totalCashPrice = this.totalCash();

  }
  totalPrice() {
    let t = 0;
    for (let data of this.items) {
      t += data.Product.Payments;
    }
    return t;
  }
  totalPayment() {
    let t = 0;
    for (let data of this.items) {
      t += data.Product.PaymentCount;
    }
    return t;
  }
  totalCash() {
    let t = 0;
    for (let data of this.items) {
      t += data.Product.Price;
    }
    return t;
  }
  remove(item) {
    this.items = this.items.filter(x => x !== item);
    this.storage.set(`Cart`, this.items);
  }
  navigate(navstring: string) {
    console.log(navstring);
    if (navstring == "buynow") {
      let navigationExtras: NavigationExtras = {
        state: {
          TotalPayment : this.totalCashPrice
        }
      };
      this.router.navigate(['/tabs/tabs/shop/cart-checkout'], navigationExtras);
    }
    if (navstring == "payments") {
      if (this.customer) {
        let navigationExtras: NavigationExtras = {
          state: {
            TotalPayment: this.totalCashPrice,
            Items: this.items,
            Payments: this.totalPayments,
            PaymentPrice: this.total
          }
        };
        this.router.navigate(['/tabs/tabs/shop/agreement'], navigationExtras);
      }
      else {
        this.router.navigate(['/tabs/tabs/shop/prequalify'])
      }
    }
  }
}
class item {
  Order: number;
  ProductName: string;
  Payment: number;
  PaymentNumber: number;
  CashPrice: number;
  Image: string;
  Active: boolean;
  constructor(order, longText, payment, paymentNumber, cashPrice, imgPath, active) {
    this.Order = order;
    this.ProductName = longText;
    this.Payment = payment;
    this.PaymentNumber = paymentNumber;
    this.CashPrice = cashPrice;
    this.Image = imgPath;
    this.Active = active
  }
}
