import { api, LightningElement } from 'lwc';

import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_NUMBER_FIELD from "@salesforce/schema/Account.AccountNumber";
import ACCOUNT_RATING_FIELD from "@salesforce/schema/Account.Rating";
import ACCOUNT_INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import ACCOUNT_TYPE_FIELD from "@salesforce/schema/Account.Type";

export default class ExploreRecordViewForm extends LightningElement {

    @api
    recordId;
    fields = [
        ACCOUNT_NAME_FIELD,
        ACCOUNT_NUMBER_FIELD,
        ACCOUNT_RATING_FIELD,
        ACCOUNT_INDUSTRY_FIELD,
        ACCOUNT_TYPE_FIELD
    ]
    handleLoad() {
        console.log("AM IN HANDLE LOAD");
    }

    handleSubmit() {
     //1. stop the default behaviour
        Event.preventDefault();
    // 2.do the field mapping 
        const fields = Event.detail.fields;
        fields.Description = "This is description field";
        fields.Phone ="809876543";
    // 3. resubmit the form
       this.template.querySelector("lightning-record-form").submit(fields);
        console.log("AM IN HANDLE SUBMIT");
    }
    handleSuccess() {
        console.log("AM IN HANDLE SUCCESS");
    }
    handleError() {
       console.log("AM IN HANDLE ERROR");
    }
}