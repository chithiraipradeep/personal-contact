import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  forgotForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController) {
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])]

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  backlogin() {
    this.navCtrl.setRoot('LoginPage');
  }

  doforgot(data) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    //Toast controller
    this.presentToast('Check your email inbox.');

    //Get Data
    console.log(data);
    this.navCtrl.setRoot('LoginPage');
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
