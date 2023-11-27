import { LightningElement, track } from 'lwc';

export default class LightningExampleInputSearch extends LightningElement {
   //@track name;   //  its make the variable private but reactive
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
       p
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
}
