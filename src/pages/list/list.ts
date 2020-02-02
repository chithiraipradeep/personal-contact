import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  pdf: any;
  listdata: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastController: ToastController,
    private modalCtrl: ModalController, private authprovider: AuthProvider) {
    let userId = localStorage.getItem('userId');
    this.authprovider.getpdf(userId)
      .then((result: any) => {
        if (result.data.users_documents != "Doument Not Uploaded") {
          this.pdf = result.data.users_documents;
        }
      });
    this.authprovider.getsavedata(userId)
      .then((result: any) => {
        console.log(result)
        this.listdata = result.message;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openmodel() {
    if (this.pdf) {
      const myModelOpts: ModalOptions = {
        showBackdrop: true,
        enableBackdropDismiss: false
      }
      let modal = this.modalCtrl.create('PdfmodelPage', myModelOpts, {
        cssClass: 'modalcss'
      });
      modal.present();
    }
    else {
      const toast = this.toastController.create({
        message: "No pdf documents available",
        duration: 3000,
        position: 'bottom',
        cssClass: 'changeToast'
      });
      toast.present();
    }
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }


  page() {
    this.navCtrl.setRoot('HomePage');
  }
}
