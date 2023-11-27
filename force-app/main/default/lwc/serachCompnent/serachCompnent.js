import { LightningElement,api } from 'lwc';

export default class SerachCompnent extends LightningElement {
    // @track name;   //  its make the variable private but reactive
     firstName;  
     lastName;
     
   
    handleInputChange(event){                       //name is html vala name
      let fullName = event.target.name;             //here event.target.name use to assign the text whatever u given in input field and this assign in fullname variable just for check
                                                   // There are two name property use in input (html)  First_Name and Last_Name 
      if(fullName=='First_Name'){                
       this.firstName = event.target.value;         // here onchange event fired when u type word in input field first Name
      }
      else if(fullName=='Last_Name'){
       this.lastName= event.target.value;
      }
     
       // this.name = this.firstName + '  ' + this.lastName;
    }
        
  get name(){
     return  this.firstName + '  ' + this.lastName;
    }
 
   get ShowNameMessage(){
     if(this.firstName || this.lastName)
     {
       return true;
     }
     return false;


   }
   handleClick(event){   
      console.log('Search Button clicked.....');
      let contactData = {firstName:this.firstName,lastName:this.lastName}; //  Object use pass the data

       // send custom event to parent saying that user has enterd search criteria
       // whenever we want to send event (means data) to parent we will create costom event
       // this custom event contain two parameter search and data(In which whatever we want pass )
       // this search parater given to parent html using on keyword so write onsearch
       console.log('Ky tr...',contactData);

       const searchEvent = new CustomEvent('searchcontact',{detail:contactData});  // here searchContact user defined event name 
       //now we dispatch the search Event here we can pass the Data to parent lwc component
      this.dispatchEvent(searchEvent);
   }


}