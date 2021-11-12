import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Storage } from '@ionic/storage'
import HttpService from '../services/http.service';

@Component({
  selector: 'shop-special-offers-page',
  templateUrl: './shop.special-offers-page.html',
  styleUrls: ['./shop.special-offers-page.scss'],
})
export class SpecialOffersPage implements OnInit {
  public total: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;


  constructor(private uniqueDeviceID: UniqueDeviceID, public router: Router, public alertController: AlertController, private route: ActivatedRoute,
    public http: HttpService, public storage: Storage
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.productID = this.router.getCurrentNavigation().extras.state.ProductID
        this.modelID = this.router.getCurrentNavigation().extras.state.ModelID
      }
    }); }
  productID: any;
  modelID: any;
  productModel;
  productPayments;
  paycycle;
  loading = false;
  async ngOnInit() {
    this.loading = true;
    this.productModel = await this.http.post({ controller: "FA", method: "ProductModels" }, { Input: { ProductID: this.productID, ModelID: this.modelID } });
    console.log(this.productModel);
    this.loading = false;
  }
  
  async showAlert2() {
      const alert = await this.alertController.create({
        header: 'Congratulations!',
        subHeader: 'Your product will be available at your neighborhood [STORE BRAND], [STORE ADDRESS]',
        message: 'They will call you when its ready!',
        buttons: ['OK']
      });
    await alert.present();
  }
  async addToCart(product) {
    let cart = await this.storage.get(`Cart`);
    cart.push(product);
      await this.storage.set(`Cart`, cart);
    const test = await this.storage.get(`Cart`);
    console.log(test);
    await this.router.navigate(['/tabs/tabs/shop']);
  }
}
