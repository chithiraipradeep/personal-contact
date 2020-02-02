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
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]
    });
  }



  userlogin() {
    this.navCtrl.setRoot('LoginPage');
  }



  douserSignUp(data) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });

    loading.present();
    this.authprovider.createuser(data.mobile,data.password)
    .then((result: any) => {
      if(result.status == true){
        loading.dismiss();
        this.navCtrl.setRoot('LoginPage');
      }else{
        loading.dismiss();
        const toast = this.toastController.create({
          message: result.message,
          duration: 3000,
          position: 'bottom',
          cssClass: 'changeToast'
        });
        toast.present();
      }
    });
    //this.navCtrl.setRoot('LoginPage');

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
