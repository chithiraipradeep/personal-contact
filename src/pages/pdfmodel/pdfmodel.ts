import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the PdfmodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdfmodel',
  templateUrl: 'pdfmodel.html',
})
export class PdfmodelPage {
  pdf = 'http://www.africau.edu/images/default/sample.pdf';

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfmodelPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  share() {
    this.socialSharing.share(null, null, null, this.pdf)
      .then(() => {

      }).catch((error) => {
        console.log(error);
      });
  }

}
