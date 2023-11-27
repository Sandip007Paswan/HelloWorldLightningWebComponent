import { LightningElement,api } from 'lwc';

export default class ChildLwc extends LightningElement {
    @api counter=0;  // here we get data from parent component
    @api maximizeCounnter(){
      this.counter=this.counter+100;
    }

}