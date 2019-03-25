import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ViewChild } from '@angular/core'
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

@ViewChild('myselect') selectComponent: IonicSelectableComponent;


	cities: any[] = [

		{
			id: 1, 
	 		name: 'Ghaziabad',
	 		aqi: '283 PM2.5',
	 		cigg: '12'
	 	},


	 	{
	 		id: 2,
	 		name: 'Noida',
	 		aqi: '213 PM2.5',
	 		cigg: '10'
	 	},

	 	{
	 		id: 3,
	 		name: 'Delhi',
	 		aqi: '235 PM2.5',
	 		cigg: '10'
	 	},

	 	{
	 		id: 5,
	 		name: 'Lucknow',
	 		aqi: '158 PM2.5',
	 		cigg: '7'
	 	},

	 	{
	 		id: 6,
	 		name: 'Gurugram',
	 		aqi: '254 PM2.5',
	 		cigg: '11'
	 	},

	 	{
	 		id: 7,
	 		name: 'Faridabad',
	 		aqi: '220 PM2.5',
	 		cigg: '10'
	 	},

	 	{
	 		id: 8,
	 		name: 'Varanasi',
	 		aqi: '122 PM2.5',
	 		cigg: '5'
	 	},

	 	{
	 		id: 9,
	 		name: 'Kanpur',
	 		aqi: '268 PM2.5',
	 		cigg: '12'
	 	},

	 	{
	 		id: 10,
	 		name: 'Patna',
	 		aqi: '133 PM2.5',
	 		cigg: '6'
	 	},

	 	{
	 		id: 11,
	 		name: 'Muzaffarpur',
	 		aqi: '114 PM2.5',
	 		cigg: '5'
	 	},

	 	{
	 		id: 12,
	 		name: 'Mandi Gobindgarh',
	 		aqi: '75 PM2.5',
	 		cigg: '3'
	 	},

	 	{
	 		id: 13,
	 		name: 'Ludhiana',
	 		aqi: '69 PM2.5',
	 		cigg: '3'
	 	},

	 	{
	 		id: 14,
	 		name: 'Jodhpur',
	 		aqi: '126 PM2.5',
	 		cigg: '6'
	 	},

	 	{
	 		id: 15,
	 		name: 'Amritsar',
	 		aqi: '61 PM2.5',
	 		cigg: '3'
	 	},

	 	{
	 		id: 16,
	 		name: 'Ahmedabad',
	 		aqi: '91 PM2.5',
	 		cigg: '4'
	 	},

	 	{
	 		id: 17,
	 		name: 'Panchkula',
	 		aqi: '41 PM2.5',
	 		cigg: '2'
	 	},


	 	{
	 		id: 18,
	 		name: 'Gaya',
	 		aqi:'70 PM2.5',
	 		cigg: '3'
	 	},

	 	{
	 		id: 19,
	 		name: 'Nagpur',
	 		aqi: '27 PM2.5',
	 		cigg: '1'
	 	},

	 	{
	 		id: 20,
	 		name: 'Vijaywada',
	 		aqi: '32 PM2.5',
	 		cigg: '1'
	 	},


	 	{
	 		id: 21,
	 		name: 'Chandrapur',
	 		aqi: '43 PM2.5',
	 		cigg: '1'
	 	},

	 	{
	 		id: 22,
	 		name: 'Chennai',
	 		aqi: '58 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 23,
	 		name: 'Bhiwadi',
	 		aqi: '103 PM2.5',
	 		cigg: '4'
	 	},

	 	{
	 		id: 24,
	 		name: 'Mumbai',
	 		aqi: '44 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 25,
	 		name: 'Nashik',
	 		aqi: '51 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 26,
	 		name: 'Thane',
	 		aqi: '41 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 27,
	 		name: 'Aurangabad',
	 		aqi: '48 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 28,
	 		name: 'Hyderabad',
	 		aqi: '56 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 29,
	 		name: 'Visakhapatnam',
	 		aqi: '51 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 30,
	 		name: 'Rajamahandevaram',
	 		aqi: '44 PM2.5',
	 		cigg: '2'
	 	},

	 	{
	 		id: 31,
	 		name: 'Chittoor',
	 		aqi: '11 PM2.5',
	 		cigg: '0'
	 	},

	 	{
	 		id: 32,
	 		name: 'Bangalore',
	 		aqi: '23 PM2.5',
	 		cigg: '1'
	 	},


	 	{
	 		id: 33,
	 		name: 'Trivandrum',
	 		aqi: '53 PM2.5',
	 		cigg: '2'
	 	},


	];



	constructor(public navCtrl: NavController, private toastController: ToastController) {

	}

	userChanged(event: { component: IonicSelectableComponent, value: any}) {

		// user selected do anything 
		console.log('event: ', event);
	}

	// onClose(){

	// 	let toast = this.toastController.create({
	// 		message: 'thanks for passing by',
	// 		duration: 2000
	// 	});

	// 	    toast.present();
	// }

	 

	openFromCode(){

		this.selectComponent.open();
	}
    
 }
