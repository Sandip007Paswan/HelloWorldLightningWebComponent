import { LightningElement ,wire } from 'lwc';
import { getRecord ,getFieldValue,createRecord } from 'lightning/uiRecordApi';

/*import Account_Object from '@salesforce/schema/Account';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Address from '@salesforce/schema/Account.BillingAddress';
import Account_Number from '@salesforce/schema/Account.AccountNumber';
import Type_Field from '@salesforce/schema/Account.Type';
*/
import Employee_Object from '@salesforce/schema/Employee1__c';
import Name_Field from '@salesforce/schema/Employee1__c.First_Name__c';
import Last_Name from '@salesforce/schema/Employee1__c.Last_Name__c';
import status from '@salesforce/schema/Employee1__c.Status__c';


export default class UIRecordDemo extends LightningElement {
    record= {};

    @wire(getRecord, { recordId:'a055g000007daKJAAY', fields: [Name_Field,Last_Name ,status ]})
    getEmployeerecord(result){
        
        console.log('Result...',result);
        this.record=result;
 
        if(result && result.data){
            console.log('....First_Name....',result.data.fields["First_Name__c"].value);
            //console.log('....First Name...',result.data.fields.First_Name__c.value);
        }
        
    }
      
    /*
    export default class UIRecordDemo extends LightningElement {
        //objectApiName = Account_Object;
    
        @wire(getRecord, { recordId:'0015g00000ueKNeAAM', fields: [Account_Name,Account_Address,Account_Number,Type_Field]})
        getdata(result)
        {
         console.log('Result is...',result);
        }
      */

    get nameVal(){
        return this.record.data ? getFieldValue(this.record.data,Name_Field) : '';
    }
    

    createEmployeeRecord(event){

                const fields= {};
                fields[Name_Field.First_Name__c]='Dibar';
                fields[Last_Name.Last_Name__c]='Jubani';
            //  fields["First_Name__c"]='Suresh';
            //  fields["Last_Name__c"]='Hadimani';

              let inputRecord={
                apiName:"Employee1__c" ,
                fields
              }
              createRecord(inputRecord);

    }
}
