import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import HttpService from '../../services/http.service';
import { Storage } from '@ionic/storage'
import ModelService from '../../services/model.service';


@Component({
  selector: 'cart-checkout',
  templateUrl: 'cart.checkout.html',
  styleUrls: ['cart.checkout.scss']
})

export class CartCheckoutPage implements OnInit {
  constructor(public storage: Storage, public router: Router, private route: ActivatedRoute, public models: ModelService, public http: HttpService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.totalPayment = this.router.getCurrentNavigation().extras.state.TotalPayment
      }
    });
  }

  totalPayment;
  user;
  person;
  primaryDC;

  async ngOnInit() {
    this.user = await this.storage.get(`user`);
    if (this.user != undefined) {
      this.person = this.models.byID('Person', this.user);
      this.primaryDC = this.person.PrimaryDebitCard;
    }
  }

}
