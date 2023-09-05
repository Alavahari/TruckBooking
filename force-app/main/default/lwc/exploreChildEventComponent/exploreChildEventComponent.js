import { LightningElement } from 'lwc';

export default class ExploreChildEventComponent extends LightningElement {
    handleClick() {

        const person = {
            name: "hari",
            age: 23,
           
        
              
        };
        // on click ont the button send info to parent 
        this.dispatchEvent(new CustomEvent("hari", {detail:person}));
    }

}