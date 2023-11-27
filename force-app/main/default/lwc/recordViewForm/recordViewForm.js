import { LightningElement,api } from 'lwc';
import Employee_Object from '@salesforce/schema/Employee1__c';
import Name_Field from '@salesforce/schema/Employee1__c.First_Name__c';
import Last_Name from '@salesforce/schema/Employee1__c.Last_Name__c';
import status from '@salesforce/schema/Employee1__c.Status__c';

export default class RecordViewForm extends LightningElement {
    
    @api recordId;
    ObjectApiName=Employee_Object;

    FirstName = Name_Field;
    LastName = Last_Name;
    status = status;
 
}