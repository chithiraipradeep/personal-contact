import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ModalOptions } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	allContacts: any;
	number: any;
	pdf: any;
	constructor(public navCtrl: NavController, private contacts: Contacts,
		private modalCtrl: ModalController) {
		this.pdf = 'http://www.africau.edu/images/default/sample.pdf';
		console.log(this.number);
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
		window.open('https://api.whatsapp.com/send?phone=' + this.number + '&text=' + this.pdf);
	}

	shareviawhatsapp(mobilenumber) {
		window.open('https://api.whatsapp.com/send?phone=' + mobilenumber + '&text=' + this.pdf);
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

}
