
import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class FieldPiclistFetchingComboBox  extends LightningElement {
    value;
    option = [];

    @wire(getObjectInfo, { objectApiName: "Contact" })
    objectInfo(result){
        console.log('--object details: ', result);
        if(result && result.data){
            console.log('--email fields: ', result.data.fields.Email);
        }
    }

    // @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: INDUSTRY_FIELD })
    // processValues(result){
    //     console.log('--picklist vlaues: ', result);
    //     if(result && result.data){
    //         this.option = result.data.values;
    //     }
    // }
}
  

