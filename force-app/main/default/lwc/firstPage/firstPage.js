import { LightningElement, wire } from 'lwc';

import fetchAccountRecords from "@salesforce/apex/FirstPageControl.fetchAccounts";
import fetchLeadRecords from "@salesforce/apex/FirstPageControl.fetchLeads";
export default class FirstPage extends LightningElement {
    message = "HEY ITS SALESFORCE";
    @wire(fetchLeadRecords)
    leads;
    //data
    //error
    //status codes

    handelClick(){
        fetchAccountRecords()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
   // handleClick1(){
  //  fetchLeadRecords()
      //  .then((data) => {
      //    console.log(data);
      //  })
        //.catch((error) => {
        //  console.log(error);
       // });
    }