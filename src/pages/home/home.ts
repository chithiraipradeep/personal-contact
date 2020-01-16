import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';
import { Contacts, Contact, ContactField, ContactName, ContactFindOptions, ContactFieldType } from '@ionic-native/contacts';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	allContacts: any;
	constructor(public navCtrl: NavController, private contacts: Contacts) {
	}

	ionViewDidEnter() {
		this.search('');
	}

	search(q) {
		// this.contacts.find(['displayName', 'name', 'phoneNumbers','emails','nickname'], { filter: q, multiple: true })
		// 	.then(data => {
		// 		this.allContacts = data
		// 	});
		this.allContacts = [];
		this.contacts.find(
			["displayName", "phoneNumbers", "name", "emails", "nickname"],
			{ filter: q, multiple: true, hasPhoneNumber: true}
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

}
