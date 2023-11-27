import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import Account_Object from '@salesforce/schema/Account';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Address from '@salesforce/schema/Account.BillingAddress';
import Account_Number from '@salesforce/schema/Account.AccountNumber';

export default class RecordEditForm extends LightningElement {
    @api recordId;
    AccountApiObject = Account_Object;
    Name = Account_Name;
    Billing_Address=Account_Address;
    Account_Number=Account_Number;
    AcccountId="Account Id Created If You Save the Record....";
  
   handleSuccess(event){
        console.log('I am in onsuccess Event');
        this.AcccountId = event.detail.id;
     
        const events = new ShowToastEvent({
            title:"Successful",
            message:"Account Created",
            variant:'success'
        });
        this.dispatchEvent(events);
    }
    

  
}