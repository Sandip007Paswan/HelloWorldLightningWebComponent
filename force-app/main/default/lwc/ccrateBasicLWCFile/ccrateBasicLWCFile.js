import { api, LightningElement } from 'lwc';

export default class CcrateBasicLWCFile extends LightningElement {

   @api name_here;  // here @api is just like public data type and name is varible...public varible
   handleChange(event){    //here event mean just like onchange,onclick,onhower
        this.name_here = event.target.value;
       
      
   }
}