import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/getAccountlistRec.getContactList';
const columnsData = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account Id', fieldName: 'Id'},
];


export default class ContainAccountRecord extends LightningElement {
   @track columns=columnsData;
   @track data=[];

    connectedCallback(){
    getContactList()
         .then(result => {
            console.log('...Result',result);
               this.data = result;
         })

         .catch(error => {
            console.log("Error Occured");
         })
   }
   



      
   
}