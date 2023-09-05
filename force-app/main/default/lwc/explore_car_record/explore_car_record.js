import { api, LightningElement, wire} from 'lwc';
import Car_FIELD from "@salesforce/schema/Car_Model__c.Car_Name__c";
import Car_Model_NAME_FIELD from "@salesforce/schema/Car_Model__c.Name";
import Color_FIELD from "@salesforce/schema/Car_Model__c.Colours__c";
import Total_FIELD from "@salesforce/schema/Car_Model__c.Total_Price__c";
import Stage_FIELD from "@salesforce/schema/Car_Model__c.Stage__c";
import getCarModels from '@salesforce/apex/car_model_controller.getCarModels';
import { NavigationMixin } from 'lightning/navigation'; 


const COLUMNS = [
    { label: 'Car', fieldName: Car_FIELD.fieldApiName, type: 'lookup'},
    { label: 'Car Model Name', fieldName: Car_Model_NAME_FIELD.fieldApiName, type: 'Text' },
    { label: 'color', fieldName: Color_FIELD.fieldApiName, type: 'Picklist'},
    { label: 'Total', fieldName: Total_FIELD.fieldApiName, type: 'Currency'},
    { label: 'stage', fieldName: Stage_FIELD.fieldApiName, type: 'Currency'},

    {lable: 'View',type: "button", typeAttributes: {  
        label: 'View',  
        name: 'View', 
        title: 'View',  
        disabled: false,  
        value: 'View',  
        iconPosition: 'left' }}
];



export default class Explore_car_record extends NavigationMixin(LightningElement) {
    @api
    recordId;

    columns = COLUMNS;
    @wire(getCarModels)
    carModel;

    callRowAction( event ) {  
          
        const recId =  event.detail.row.Id;  
        const actionName = event.detail.action.name;  
        if ( actionName === 'View' ) {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Car_model__c',  
                    actionName: 'view'  
                }  
            })  
  
        }

    
}

}