import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ModalOptions, ToastController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';
import { AuthProvider } from './../../providers/auth/auth';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	allContacts: any;
	number: any;
	pdf: any;
	imageurl: any;
	userId: any;
	constructor(public navCtrl: NavController, private contacts: Contacts,
		private socialSharing: SocialSharing, public toastController: ToastController,
		private modalCtrl: ModalController, private authprovider: AuthProvider) {
		this.userId = localStorage.getItem('userId');
		this.authprovider.getpdf(this.userId)
			.then((result: any) => {
				if (result.data.users_documents != "Doument Not Uploaded") {
					console.log(result.data.users_documents);
					this.pdf = result.data.users_documents;
				}
			})
		this.imageurl = 'https://i.gadgets360cdn.com/large/pdf_pixabay_1493877090501.jpg';

	}

	ionViewDidEnter() {
		this.search('');
	}

	search(q) {
		this.allContacts = [];
		this.contacts.find(
			["displayName", "phoneNumbers", "name", "emails", "nickname"],
			{ filter: q, multiple: true, hasPhoneNumber: true }
		).then((contacts) => {
			for (var i = 0; i < contacts.length; i++) {
				if (contacts[i].displayName !== null) {
					var contact = {};
					contact["name"] = contacts[i].displayName;
					contact["number"] = contacts[i].phoneNumbers[0].value;
					this.allContacts.push(contact);
				}
			}
			this.allContacts.sort(function (a, b) {
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase

				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				// names must be equal
				return 0;
			});
		});
	}

	onKeyUp(ev) {
		this.search(ev.target.value);
	}

	page() {
		this.navCtrl.setRoot('ListPage');
	}

	getvalue(number) {
		this.number = number;
		console.log(this.number);
	}

	share() {
		if (this.pdf) {
			let mobilenumber = '91' + this.number;
			this.authprovider.savedata(this.userId, 'whatsapp', mobilenumber)
				.then((result: any) => {
					console.log(result);
				});
			this.socialSharing.shareViaWhatsAppToReceiver(mobilenumber, null, this.imageurl, this.pdf)
				.then(() => {

				}).catch((error) => {
					console.log(error);
				});
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
		//window.open('https://api.whatsapp.com/send?phone=91' + this.number + '&text=' + this.pdf);
	}

	shareviawhatsapp(mobilenumber) {
		if (this.pdf) {
			this.authprovider.savedata(this.userId, 'whatsapp', mobilenumber)
				.then((result: any) => {
					console.log(result);
				});
			this.socialSharing.shareViaWhatsAppToReceiver(mobilenumber, null, this.imageurl, this.pdf)
				.then(() => {

				}).catch((error) => {
					console.log(error);
				});
		}
		else {
			const toast = this.toastController.create({
				message: "No pdf documents available",
				duration: 3000,
				position: 'bottom',
				cssClass: 'changeToast'
			});
			toast.present();
			//window.open('https://api.whatsapp.com/send?phone=' + mobilenumber + '&text=' + this.pdf);
		}
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
			//window.open('https://api.whatsapp.com/send?phone=' + mobilenumber + '&text=' + this.pdf);
		}
	}





}