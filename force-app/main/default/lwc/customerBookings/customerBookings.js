import { LightningElement } from 'lwc';
import gettruckBookingsByCustomer from '@salesforce/apex/truckBookings.truckBookingsByCustomer';

const table_columns = [
                        {label:'Booking Name', fieldName:'NameUrl', type:'url' ,typeAttributes:{label:{fieldName:'Name'}}},
                        {label :'Truck',fieldName:'Name',type:'text'},
                        {label:'Pickup Point',fieldName:'Pick_List__c',type : 'Picklist'},
                        {label:'Drop Point', fieldName:'Drop_Point__c', type:'Picklist'},
                        {label:'Booking Status', fieldName:'Booking_Status__c', type:'Picklist',editable: true},
                        // {label:'Total weight', fieldName:'Total_Weight__c', type:'Roll-Up Summary'},
                        {label:'phone number', fieldName:'Phone_Number__c', type:'Number'},
                    ];
const pageSize = 5;
                      
export default class CustomerBookings extends LightningElement {
    columns = table_columns; 
    bookings;
    error;
    fullResult;
    startSize=0;
    endSize=pageSize;
    isPaginate = false;
    handlePrevious(){
        this.startSize=this.startSize-pageSize;
        this.endSize=this.endSize-pageSize;
        this.bookings=this.fullResult.slice(this.startSize,this.endSize);
        this.template.querySelectorAll('lightning-button')[1].disabled=false;
        if(this.startSize === 0)
        this.template.querySelectorAll('lightning-button')[0].disabled=true;
    }
    handleNext(){
        this.startSize=this.startSize+pageSize;
        this.endSize=this.endSize+pageSize;
        this.bookings=this.fullResult.slice(this.startSize,this.endSize);
        this.template.querySelectorAll('lightning-button')[0].disabled=false;
        if(this.endSize >=this.fullResult.length)
          this.template.querySelectorAll('lightning-button')[1].disabled=true;
    }
    initialLoad(){
        this.bookings=this.fullResult.slice(this.startSize,this.endSize);   
    }
    connectedCallback(){
        this.fetchbookings();
    }
    fetchbookings(){
        gettruckBookingsByCustomer()
        .then(data =>{
            // console.log('data');
            // console.log(data);
            let result = [];
            data.forEach(dataItem => {
            let tempData = {};
            tempData ={ ...dataItem};
            tempData.TruckName = dataItem.Truck__r.Name;
            tempData.NameUrl='/'+dataItem.Id;
            result.push(tempData);
            })
            this.fullResult = result;
            this.isPaginate=this.fullResult.length>5;
            console.table(this.fullResult);
            // console.log('initial');
            // console.table(this.fullResult);
            this.initialLoad();
            // console.table(this.fullResult);
        })
        .catch(error=>{
            this.error=error;
        })
    }

}