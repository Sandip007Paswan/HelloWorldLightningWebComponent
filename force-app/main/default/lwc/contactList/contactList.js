import { track,api, LightningElement } from 'lwc';
//import searchContactRec from '@salesforce/apex/FetchingApexClassToLwc.getRecordContactList'  // this is for Apex class importing and searchContactRec just like reference or alis
/*
const columnsData = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account Id', fieldName: 'Id'},
    { label: 'Email',fieldName:'Email'}
];*/
export default class ContactList extends LightningElement {
    @api privateVar = "";
    @api searchCriteria = {};
   // @track columns=columnsData;
   // @track data=[];

    get showFirstName(){
        if(this.searchCriteria && this.searchCriteria.firstName){
            return true;
        }
        return false;
    }
    get showLastName(){
        if(this.searchCriteria && this.searchCriteria.lastName){
            return true;
        }
        return false;
    }
   /*
    @api getRecordContactList(){
        searchContactRec({ firstNAME : this.searchCriteria.firstName , lastNAME : this.searchCriteria.lastName}) // if this searchCotactrec ref call is successful 
                                                                                        //then we get result otherwise we get error
        .then(result =>{ 
            console.log('---Results:',result);
            this.data=result;
        })
        .catch(err =>{
        console.log('----Error:',err);
        })
    }
       */

   
}

//Process of convert child to parent
//1)create public property using @api and also import api in child js this property is empty and from passing we first name and last
//2)then go to parent html where u write public property

//Process