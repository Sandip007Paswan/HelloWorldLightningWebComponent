//To render a list of items,use for:each directive or thr iterator direcative over to iterate an array.
//Add thr directive to a nested <template> tag that encloses the html element you want to repeat

//    Regardless of which directive you use,you must use key directive to assign a unique ID to each item.When list changes -
// the framework uses the key to rerender only the item that changed.The key in the template is used for performance optimization
// an isnt reflected in the DOM at run time.


import { LightningElement ,wire} from 'lwc';
import getEmpoyeeList from '@salesforce/apex/employeeClassGetRec.employeeGetRec';

export default class UseForEachLoop extends LightningElement {
   // data=[];

    @wire(getEmpoyeeList)
    Employess;                                            //this is property
   // consol.log('Fadu :'+JSON.stringify(Employess));
}