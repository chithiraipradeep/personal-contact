import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthProvider } from './../../providers/auth/auth';
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
   pdf:any;
   imageurl:any;

   constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
     private socialSharing: SocialSharing,private authprovider: AuthProvider) {
     let userId=localStorage.getItem('userId');
     this.authprovider.getpdf(userId)
     .then((result:any)=>{
       if(result.data.users_documents!="Doument Not Uploaded"){
         console.log(result.data.users_documents);
         this.pdf = result.data.users_documents;
       }
     })
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad PdfmodelPage');
   }

   close() {
     this.viewCtrl.dismiss();
   }

   share() {
     this.socialSharing.share(null, null,null,this.pdf)
     .then(() => {

     }).catch((error) => {
       console.log(error);
     });
   }

 }
