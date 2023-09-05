import { LightningElement } from 'lwc';
import paymentList from '@salesforce/apex/paymentList.paymentList';

const table_columns = [
                        // {label:'Payment Name', fieldName:'Name', type:'url' ,typeAttributes:{label:{fieldName:'Name'}}},
                        {label :'Truck Booking Name',fieldName:'TruckBookingName',type:'text'},
                        
                        {label:'Payment Date', fieldName:'Payment_Date__c', type:'Date'},
                        {label:'Total Amount', fieldName:'Total_Amount__c', type:'Currency'},
                        {label:'Payment Mode', fieldName:'Payment_Mode__c', type:'Picklist'}
                    ];
                     
export default class AllPayments extends LightningElement {
    columns = table_columns; 
    payments;
    error;
    connectedCallback(){
        this.fetchpayments();
    }
    fetchpayments(){
        paymentList()
        .then(data =>{
            let result=[];
            data.forEach(dataItem=>{
                let tempData = {};
                tempData={...dataItem};
                tempData.TruckBookingName= dataItem.Truck_Booking__r.Name;
                tempData.NameUrl='/'+dataItem.Id;
                result.push(tempData);
            })
            this.payments=result;
        })
        .catch(error=>{
            this.error=error;
        })
    }
}