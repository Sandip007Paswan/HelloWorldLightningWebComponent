import { LightningElement,api ,track,wire} from 'lwc';
import searchContactRec from '@salesforce/apex/FetchingApexClassToLwc.getRecordContactList'; 

const columnsData = [
  { label: 'Name', fieldName: 'Name' },
  { label: 'Account Id', fieldName: 'Id'},
  { label: 'Email',fieldName:'Email'}
];

export default class SeaechComponentDisplay extends LightningElement {
   
   columns=columnsData;
   data=[] ;        
   contactList;

   recieveData = {}; //this data in global form

   @wire(searchContactRec,{ firstNAME : '$recieveData.firstName' , lastNAME : '$recieveData.lastName'})
   getConatctDetail({error,data}) {
             if(data)
             { 
              this.data = data;
              console.log('Result...:',data);
             }
          else if(error) 
            {
           console.log("Error Occure");
          }
       
  }

   handleSearch(event){
   try{console.log('I am in search Event......');

        this.recieveData = event.detail;
        console.log('The Search data is :'+JSON.stringify(this.recieveData));  // this recieveData 
       /*
          Call the childs method to search contacts (apex call)
          let contactListComp=this.template.querySelector('c-contact-list');  //contactlistComp is ref of child

          if(contactListComp){
            contactListComp.getRecordContactList()
          }*/
        
          //  this.getRecordContactList();
        // this.getConatctDetail();

      } catch(err) {
        console.log('Error found:'+err);
    }
  }
/*
 //this method is imperative method 
  getRecordContactList(){
      searchContactRec({ firstNAME : this.recieveData.firstName , lastNAME : this.recieveData.lastName}) // if this searchCotactrec ref call is successful 
                                                                                      //then we get result otherwise we get error
      .then(result =>{ 
          console.log('---Results:',result);
          this.data=result;
      })
      .catch(err =>{
      console.log('----Error:',err);
      })
     }    */

   
    
     get showing(){
      if(this.data.length==0)
      {
          return false;
      }
      return true;
  }
      
    
}