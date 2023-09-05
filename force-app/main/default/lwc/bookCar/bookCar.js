import { LightningElement } from 'lwc';
import fetchCarModel from '@salesforce/apex/mainConnect.fetchCarModel';
import fetchContact from '@salesforce/apex/mainConnect.fetchContact';

import dobookCar from '@salesforce/apex/bookCar.dobookCar';
import htmlone from './bookCar.html';
import htmltwo from './bookingPage.html';


export default class BookCar extends LightningElement {

    carModelData;
    carModelError;

    conData;
    conError;

    carData=[];
    contactData=[];

    activePage=1;
    model;
    account;


    connectedCallback()
    {
        this.fetchTheCarModel();
        this.fetchTheContact();
    }

    fetchTheCarModel()
    {
        fetchCarModel()
        .then(data=>{
            this.carModelData=data;
            let result=[];
            data.forEach(dataItem => {
                let tempData = {};
                tempData.label=dataItem.Name;
                tempData.value=dataItem.Name;
                tempData.Total_price__c=dataItem.Total_price__c;
                tempData.Id=dataItem.Id;
                result.push(tempData);
            });
            this.carData=result;
            
            console.log(this.carData);
        })
        .catch(error=>{
            this.carModelError=error;
        });

    }

    fetchTheContact()
    {
        fetchContact()
        .then(data=>{
            this.conData=data;
            let result=[];
            data.forEach(dataItem => {
                let tempData = {};
                tempData.label=dataItem.Name;
                tempData.value=dataItem.Name;
                tempData.AccountId=dataItem.AccountId;
                result.push(tempData);
            });
            console.log(result);
            this.contactData=result;
        })
        .catch(error=>{
            this.conError=error;
        });

    }

    value = '';

    get carModelOptions() {
        return this.carData;
    }

    handleChange(event) {
        this.value = event.detail.value;
    }


    customerName = '';

    get options1() {
        return contactData;
    }

    handleCustomerChange(event) {
        this.customerName = event.detail.value;
    }


    fetchDoBookCar()
    {
        dobookCar({search :this.model,AccId : this.account})
        .then()
        .catch();
    }


    bookTheCar()
    {
        this.carData.forEach(modelName=>{
            if(this.value==modelName.label)
            {
                this.model=modelName.Id;
            }
        });

        this.contactData.forEach(accName=>{
            if(this.customerName==accName.label)
            {
                this.account=accName.AccountId;
            }
        });
        
        console.log(this.account);
        console.log(23);

        this.fetchDoBookCar();

        this.activePage=1;
        this.value='';
        this.customerName='';
    }

    getBookingPage()
    {
        this.activePage=2;
    }
    returnMainPage()
    {
        this.activePage=1;
    }

    render()
    {
        if(this.activePage===1)
        return htmlone;
        else if(this.activePage===2)
        return htmltwo;
    }


}