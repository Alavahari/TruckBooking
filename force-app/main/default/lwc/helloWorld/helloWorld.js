import Country from '@salesforce/schema/Lead.Country';
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname=" zero to hero "
    title =" LWC "
    changeHandler (event){
        // extract the value that is typed by user and target will hold the value 
        this.title = event.target.value
    }

    address ={
        city:"Eluru",
        pincode:534001,
        Country:"India"
    }
    trackHandler(event){
        this.address.city=event.target.value

    }
}