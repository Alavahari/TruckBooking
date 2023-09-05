import { LightningElement } from 'lwc';

export default class ExploreParentEventComponent extends LightningElement {
    handleParentEvent(Event) {
        console.log(JSON.stringify(Event.detail));
        console.log("AM IN PARENT METHOD");
    }
}