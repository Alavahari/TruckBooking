import { LightningElement } from 'lwc';

import Payment_Name from '@salesforce/schema/Payment__c.Name';
import Payment_Date from '@salesforce/schema/Payment__c.Payment_Date__c';
import Payment_Mode from '@salesforce/schema/Payment__c.Payment_Mode__c';
import TotalAmount from '@salesforce/schema/Payment__c.Total_Amount__c';
import Truck_Booking_Name from '@salesforce/schema/Payment__c.Truck_Booking__c';

export default class NewPayment extends LightningElement {
    fields=[Truck_Booking_Name,Payment_Name,Payment_Date,Payment_Mode,TotalAmount];
}