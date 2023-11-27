import { LightningElement ,api} from 'lwc';
//whatever field u want import first 

import Account_Name from '@salesforce/schema/Account.Name';
import Account_Address from '@salesforce/schema/Account.BillingAddress';
import Account_Number from '@salesforce/schema/Account.AccountNumber';
import Account_PhoneNum from '@salesforce/schema/Account.Phone';



export default class RecordForm extends LightningElement {
    @api recordId;
    @api name;
    @api count;
    getData;

    Nameof_field_Array=[Account_Name,Account_Address,Account_Number,Account_PhoneNum];
    

    HandleChange(event){
        this.getData=event.target.value;

    }

    handelSubmit(event)   // here if we want to initialzed the default value or modified then use onSubmit event
    {
        console.log('Onsubmit Event is Working...');
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Name = "Name change Form Component";
        fields.Phone=this.getData;
        this.template.querySelector('lightning-record-form').submit(fields);
        console.log("Record Sumitted Successfully");
    }

}