import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { CountdownComponent, CountdownModule } from 'ngx-countdown';
import HttpService from '../services/http.service';

@Component({
  selector: 'special-offers-landing',
  templateUrl: 'shop.special-offers-landing.html',
  styleUrls: ['shop.special-offers-landing.scss']
})
export class shopSpecialOffersLandingPage implements OnInit {

  constructor(
    public router: Router,
    private animationCtrl: AnimationController,
    public alertController: AlertController,
    public http: HttpService
  ) { }
  products;
  async ngOnInit() {
    this.products = await this.http.post({ controller: "FA", method: "ActiveProducts" }, {});
    console.log(this.products);
  }

  openProductModelPage(productID : number) {
    let navigationExtras: NavigationExtras = {
      state: {
        ProductID : productID
      }
    };
    this.router.navigate(['/tabs/tabs/shop/shop-special-offers-category1'], navigationExtras);
  }
}



