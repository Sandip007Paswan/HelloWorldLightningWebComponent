/*
import { LightningElement ,wire,track} from 'lwc';
import getempList from '@salesforce/apex/wireDemoClass/getempList';

const columns = [
    {lable : "E_Name" , fieldName : "First_Name__c"},
    {lable : "Employee Record Id" , fieldName: "Id"},
];

export default class WireDecoratorBySalesforce extends LightningElement {
  columns=columns;
  @track data = [];

   @wire(getempList)

   wireEmploye({data,error}){
    if(data)
    { 
        this.data = data;
    }
    else if(error) 
    {
     console.log("Error Occure");
    }
   }

}*/

import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/employeeClassGetRec.employeeGetRec';

const columnsData = [
    { label: 'Name', fieldName: 'First_Name__c' },
    { label: 'Employee Record Id', fieldName: 'Id'},
];

export default class WireDecoratorBySalesforce extends LightningElement {
    data = [];    //data is object
    columns = columnsData;

    //@wire(usedMethod,{Pertucular record id pass}) 
                                    // wire decorator its nature is reactive type means whenever change occure in field its value get automatically change and show in lwc component
    @wire(getAccountList)           //getAccountList is reference apex class which return the data whaterver u query doing there

    getAllAccountList({data,error}){    // how here data get
     if(data)
     { 
         this.data = data;
     }
     else if(error) 
     {
      console.log("Error Occure");
     }
    }
  
}
