//Show Toast Event In Lwc
import { LightningElement } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent'

export default class TostEvent extends LightningElement {

     myTitle = "Welcome in Salesforce Org Record";
    //1st Function
    handleClick(){
       
          this.showToast();
    }

  // tost is like notification on perticular event or perticualr condition and show user like a pop-up
  // for this import {ShowToastEvent} from 'lightning/platformShowToastEvent'

  // 2nd Function

  showToast(){
    
    window.alert('I am in this method');
    const event = new showToastEvent({
        title :'show toast demo',                               // this all is event created this event fired when we use onclick event 
        message :'Want to display toast Example',
        variant : 'success',                          // show in green colour for error=show red colour

    })
    this.dispatchEvent(event);   
  }
  
}