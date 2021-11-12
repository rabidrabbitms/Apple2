import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import HttpService from '../services/http.service';
import { Global } from '../services/Global';
import {Storage} from '@ionic/storage'
import Customer from '../../MLC/Types/Customer';
import ModelService from '../services/model.service';

@Component({
  selector: 'nav',
  templateUrl: 'nav.html',
  styleUrls: ['nav.scss']
})
export class NavPage implements OnInit{
  constructor(private location: Location, public http: HttpService, private readonly global: Global, public storage: Storage, readonly models: ModelService) { }

  buyingPower;
  customer?: Customer;
  cartItems;
  showCartAlert = false;
  async ngOnInit() {
    const cart = await this.storage.get(`Cart`);
    if (cart.length > 0) {
      this.showCartAlert = true;
    }
    const user = await this.storage.get('user');
    if (user) {
      this.buyingPower = await this.http.post({ controller: 'FA', method: 'CustomerBuyingPower' }, { Input: { Customer: user.ID } });
    }
    else {
      this.buyingPower = null;
    }
  }
  back() {
    this.location.back()
  }
}
