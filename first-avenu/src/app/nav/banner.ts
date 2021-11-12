import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Animation, AnimationController, AlertController  } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'
import ModelService from '../services/model.service';
import HttpService from '../services/http.service';

@Component({
  selector: 'banner',
  templateUrl: 'banner.html',
  styleUrls: ['banner.scss']
})
export class Banner implements OnInit  {

  constructor(private location: Location, private animationCtrl: AnimationController, private router: Router, public storage: Storage, private models: ModelService, public http: HttpService) {}

  banners = [
    {Name:'prequalify',     header: 'Pre-Qualify Me!',         body: `I want to know what I'm eligible for!`,   img: '../assets/Banner-Passport.svg',   animationType: 'rotate',      link:'/tabs/tabs/shop/prequalify' },
    {Name:'purchaseReady',  header: 'Purchase Is Ready!',      body: `Ready to be picked up.`,                  img: '../assets/Banner-Car.svg',        animationType: 'rightToLeft', link:'/tabs/tabs/account/purchases' },
    {Name: 'vacationReady', header: 'Your Vacation Awaits',    body: `Redeem your vacation now.`,               img: '../assets/Banner-Ticket.svg',     animationType: 'rotate',      link:'/tabs/tabs/account/purchases'},
    {Name:'processing',     header: 'Application Processing',  body: `We'll notify you when we are done.`,      img: '../assets/Banner-Looky.svg',      animationType: 'rightToLeft', link:'' },
    { Name: 'refer-a-friend', header: 'Earn Extra Cash!', body: `Invite your friends to join!`, img: '../assets/Banner-RAF.svg', animationType: 'rightToLeft', link: '/tabs/tabs/account/refer' },
    { Name: 'Discover Buying Power', header: 'Discover Your Buying Power', body: `I want to know what I'm eligible for!`, img: '../assets/Train.svg', animationType: 'rightToLeft', link: '/tabs/tabs/shop/prequalify' },
    { Name: 'Add Buying Power', header: 'Add Buying Power', body: `I want to know what I'm eligible for!`, img: '../assets/Train.svg', animationType: 'rightToLeft', link: '/tabs/tabs/account/buying-power' }
  ];
  banner;

  person: {};
  purchaseInfo: any;

  async ngOnInit() {
    const user = await this.storage.get('user');
    if (user) {
      this.purchaseInfo = await this.http.post({ controller: "FA", method: "LatestCustomerPurchase" }, { Input: { Customer: user.ID } });
      if (this.purchaseInfo.customerStatus == "Not Registered") {
        this.banner = this.banners[0];
      }
      else {
        if (this.purchaseInfo.loanStatus == null || this.purchaseInfo.loanStatus == "Pending") {
          this.banner = this.banners[3];
        }
        else {
          if (this.purchaseInfo.productType == "Purchase") {
            this.banner = this.banners[1];
          }
          else {
            this.banner = this.banners[2];
          }
        }
      }
    }
    else {
      this.banner = this.banners[5];
    }
    this.createAnimation('.image', '', '75', '0', 8000);
  }
  nav() {
    this.router.navigate([this.banner.link])
  }
  createAnimation(element: string, movementStyle: string, movementStart: string, movementEnd: string, duration: number) {
    movementStyle = this.banner.animationType;
    if (movementStyle == 'rightToLeft') {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .iterations(Infinity)
        .easing('ease-out')
        .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
      animation.play();
    }
    else {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'scale(1) rotate(0)' },
          { offset: 0.5, transform: 'scale(1) rotate(15deg)' },
          { offset: 1, transform: 'scale(1) rotate(0) ' }
        ]);
      animation.play();
    }

  }
}
