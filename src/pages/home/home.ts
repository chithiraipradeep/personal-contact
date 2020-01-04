import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	ourtype: ContactFieldType[] = ["displayName"];
	contactsFound = [];
	constructor(public navCtrl: NavController, private contacts: Contacts) {
	}

	ionViewDidEnter() {
		this.search('');
	}

	search(q) {
		const option: IContactFindOptions = {
			filter: q
		}
		this.contacts.find(this.ourtype, option)
			.then(conts => {
				this.contactsFound = conts;
			})
	}

	onKeyUp(ev) {
		this.search(ev.target.value);
	}

	page() {
		this.navCtrl.setRoot('ListPage');
	}
	
}
