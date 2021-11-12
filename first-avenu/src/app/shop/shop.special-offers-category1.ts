import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import HttpService from '../services/http.service';

@Component({
  selector: 'special-offers-category1',
  templateUrl: 'shop.special-offers-category1.html',
  styleUrls: ['shop.special-offers-category1.scss']
})
export class shopSpecialOffersCatagory1Page implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public http: HttpService

  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.productID = this.router.getCurrentNavigation().extras.state.ProductID
      }
    }); }
  productID: any;
  productModels
 
  async ngOnInit() {
    console.log(this.productID);
    this.productModels = await this.http.post({ controller: "FA", method: "ProductModels" }, { Input: {ProductID: this.productID}});
    console.log(this.productModels);
  }
  openProductDetailPage(productID: number, modelID : number) {
    let navigationExtras: NavigationExtras = {
      state: {
        ProductID: productID,
        ModelID: modelID
      }
    };
    this.router.navigate(['/tabs/tabs/shop/shop-special-offers-page'], navigationExtras);
  }

}

