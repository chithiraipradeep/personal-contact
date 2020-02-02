import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: "";
  password: "";
  loginForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, private authprovider: AuthProvider,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastController: ToastController
  ) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registration() {
    this.navCtrl.setRoot('RegistrationPage');
  }

  forgot() {
    this.navCtrl.push('ForgotpasswordPage');

  }


  async dologin(data) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });

    loading.present();
    this.authprovider.login(data.mobile,data.password)
    .then((result: any) => {
      if(result.status == true){
        loading.dismiss();
        this.navCtrl.setRoot('HomePage');
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
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
