import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   msg = "THIS IS THE DEFAULT VALUE IN PARENT";
    handleClick(){
       // this.msg = "THIS INFO IS BEING SENT FROM PARENT";
//  1. query and get reference to the child tag


this.template.querySelector("c-child-component").sum(10,23);

//   2. invoke the method 
    }
}