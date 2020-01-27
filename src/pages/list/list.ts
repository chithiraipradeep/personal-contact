import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ModalOptions  } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openmodel() {
		const myModelOpts: ModalOptions = {
			showBackdrop: true,
			enableBackdropDismiss: false
		}
		let modal = this.modalCtrl.create('PdfmodelPage', myModelOpts, {
			cssClass: 'modalcss'
		});
		modal.present();
	}


  page(){
    this.navCtrl.setRoot('HomePage');
  }
}
