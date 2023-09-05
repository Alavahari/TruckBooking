import { LightningElement, wire, api } from 'lwc';
import booking from './booking.html';
import customer from './customer.html';
import load from './load.html';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getTruckList from '@salesforce/apex/truckList.search';


const table_columns = [{
    label: 'View',type: 'button',typeAttributes: {title: 'preview',variant: 'border-filled',label:'Book'},cellAttributes:{alignment:'center'}},
                        {label:'Name', fieldName:'Name', type:'text',cellAttributes:{alignment:'center'}},
                        {label:'Truck Number',fieldName:'Truck_Number__c',type:'text',cellAttributes:{alignment:'center'}},
                        {label:'Image', fieldName:'Image', type:'image'},
                        {label:'Maximum Load(In Kgs)', fieldName:'Max_Load_c__c', type:'number',cellAttributes:{alignment:'center'}},
                        {label:'Cost / K.M. (in INR)', fieldName:'Cost_K_M_in_INR__c', type:'Currency',cellAttributes:{alignment:'center'}},
                        ];
                        

export default class Customer extends LightningElement {
      @api recordId;
      error;
      columns = table_columns;
      record = {};
      bShowModal = false;
      trucks;
      bookingId;
      activePage=1;
      saveAndNew = false;
    @wire(getTruckList)
    wiredTrucks({ error, data }) {
        if (data) {
            let tempRecords = [];
            console.table(data);
            data.forEach(element => {
                let tempElement = {...element };
                let parser = new DOMParser();
                let htmlDoc = parser.parseFromString(element.Image__c, 'text/html');
                console.log(htmlDoc.getElementsByTagName('img')[0].src);
                tempElement.Image = htmlDoc.getElementsByTagName('img')[0].src;
                tempRecords.push(tempElement);
            });
            this.trucks = tempRecords;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.trucks = undefined;
        }
    }
    callRowaction(event){
            const row=event.detail.row;
            console.log('row data'+row.Id);
            this.record =row;
            this.activePage=2;
    }
    handleSuccess1(event){
        this.bookingId=event.detail.id;
        console.log('booking id'+this.bookingId);
        this.activePage=3;
    }

    handleButton(event){
    // window.open('https://gmailcomcgm-dev-ed.develop.lightning.force.com/lightning/n/Truck_Load_UI');
    // this.bookingId=event.detail.id;
    // console.log('booking id'+this.bookingId);
    this.activePage=3;
}

handleSave() {
  this.saveAndNew = false;
  this.handleRecordSave();
}

handleSaveAndNew() {
  this.saveAndNew = true;
  this.handleRecordSave();
}

handleReset(event) {
  const inputFields = this.template.querySelectorAll(
    'lightning-input-field'
  );
  if (inputFields) {

    for(let i=1;i<inputFields.length;i++){
        inputFields[i].reset();
        console.log(i);
    }
  }
}

handleSuccess() {
  if(this.saveAndNew){
    this.handleReset();
  } else{
    location.reload();
  }
}

handleRecordSave() {
  this.template.querySelector('lightning-record-edit-form').submit(this.fields);
}

handlepageTwo(){
    this.activePage=1;
}

handlepageThree(){
    this.activePage=2;
}
render(){
    if(this.activePage===1){
        return customer;
    }
    else if(this.activePage===2){
        return booking;
    }
    else if(this.activePage===3){
        return load;
    }
}

}