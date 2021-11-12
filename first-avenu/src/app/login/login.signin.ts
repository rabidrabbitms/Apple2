import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as MLC from '../../MLC';
import UserService from '../services/user.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'signin',
  templateUrl: './login.signin.html',
  styleUrls: ['./login.signin.scss'],
})
export class LoginSignin implements OnInit {

  constructor(private animationCtrl: AnimationController, public alertController: AlertController,  readonly router: Router, readonly route: ActivatedRoute, readonly formBuilder: FormBuilder, readonly userService: UserService, public storage: Storage) {
  }
  form = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    VerifyPassword: ['', Validators.required],
    Zip:['',Validators.required]
  });

  step: 'username' | 'password' = 'username';
  message?: { title: string, description: string, icons: string[], color: string };
  messageIcon = "fa-exclamation";
  user: MLC.Types.User = {};
  loading = false;
  processing = false;
  credentials: { Username?: string, Password?: string } = {};
  returnUrl;


  ngOnInit() {
    this.createAnimation('.chat1', '', '0', '5', 950)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    console.log(this.returnUrl);
  }
  createAnimation(element: string, movementStyle: string, movementStart: string, movementEnd: string, duration: number) {
    if (movementStyle == 'vertical') {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .iterations(Infinity)
        .easing('ease-in')
        .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
      animation.play();
    }
    if (movementStyle == 'horizontal') {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .iterations(Infinity)
        .easing('ease-in')
        .fromTo('transform', 'translateX(' + movementStart + 'px)', 'translateX(' + movementEnd + 'px)');
      animation.play();
    }
    else {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration).keyframes([
          { offset: 0, transform: 'scale(0.1))', opacity: '0.25' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '.5' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);
      animation.play();
    }

  }
  async login() {
    this.processing = true;
      const response = await this.userService.login(this.credentials);
      console.log(response);
      console.log('hit');
      if(response)
        await this.router.navigate(['/tabs/tabs/shop']);
  }
}


