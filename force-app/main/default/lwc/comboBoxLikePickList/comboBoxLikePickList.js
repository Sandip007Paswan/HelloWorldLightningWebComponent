import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/getAccountlistRec.getContactList';

export default class ComboBoxLikePickList extends LightningElement {
    value = '';
    OptionObject=[];
  
 
/*get optionsObject(){
        return[
            {label:'---',  value:'Unknown'},
            {label:'New',   value:'Shubham '},
            {label:'Old',  value:'Shivam'},
        ];
    }
     */
    
    
get optionsObject(){
        return this.OptionObject;
 }


connectedCallback(){
    getAccountList()
    .then(result =>{
       let arr = [];
       for(var i=0;i<result.length;i++){
        arr.push({label: result[i].Name , value: result[i].Id})   //here we use push method 
       }
      
       this.OptionObject=arr;   //here we store the all the fetch account data in one by one 
       console.log('Result....',this.OptionObject);
    })
}

handlechange(event){
    this.value = event.detail.value;
}
   
}