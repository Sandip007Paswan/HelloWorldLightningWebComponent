import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Account_Object from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import Number_Filed from '@salesforce/schema/Account.AccountNumber';
import Type_Field from '@salesforce/schema/Account.Type';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Industry_Field from '@salesforce/schema/Account.Industry';


export default class CreateAccountRecord extends LightningElement {
    accountId;
    Name='' ;
    Number='';
    Type='';
    industry='';
    phone='';

  handleNameChange(event){
           this.Name = event.target.value;
           console.log('Name is...',this.Name);
         //  console.log('Name is..'+JSON.stringify(this.Name));
           }
    handlenumberChange(event){
        this.Number=event.target.value;
        console.log('Number is..',this.Number);
    }
    handleTypeChange(event){
        this.Type = event.target.value;
    }
    handleindustryChange(event){
        this.industry=event.target.value;
    }
    handlePhoneChange(event){
        this.phone=event.target.value;
    }
    

    createAccountHandle(event){
        const fields = {};   // here created empty Object
                              
        fields[Name_Field.fieldApiName]=this.Name;
        fields[Number_Filed.fieldApiName]=this.Number;
        fields[Type_Field.fieldApiName]=this.Type;
        fields[Phone_Field.fieldApiName]=this.phone;
        fields[Industry_Field.fieldApiName]=this.industry;
        console.log('field is..'+JSON.stringify(fields));
          
        const recordInput = {apiName:Account_Object.objectApiName,fields};

        createRecord(recordInput)
        .then(result =>{         // Here give just like promise Type
            console.log("Created Record is..."+JSON.stringify(result));
            this.accountId=result.id;
        })
        .catch(error =>{
            console.log("Error is:"+JSON.stringify(error));
        })

    }

}