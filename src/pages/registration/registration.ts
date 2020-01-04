import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  reguserForm: FormGroup;
  regvendorForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private authprovider: AuthProvider,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController) {
  }

  ngOnInit() {
    this.reguserForm = this.formBuilder.group({
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'passwordcon': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
    });
  }



  userlogin() {
    this.navCtrl.setRoot('LoginPage');
  }



  douserSignUp(data) {

    if (data.password == data.passwordcon) {
      this.navCtrl.setRoot('LoginPage');
    } else {
      alert("Password mismatch");
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  backlogin() {
    this.navCtrl.setRoot('WelcomePage');
  }

}
