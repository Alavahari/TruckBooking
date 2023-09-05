import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    //public access specifier
    @api
    message = "THIS IS THE DEFAULT VALUE";


    @api
    sum(a,b){
        let c = a+b;
        console.log(c);
    }
}