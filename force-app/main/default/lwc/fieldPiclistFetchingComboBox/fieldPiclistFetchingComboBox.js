  
import { LightningElement ,wire} from 'lwc';
import { getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Industry_Field from '@salesforce/schema/Account.Industry';


export default class GetObjectInformation extends LightningElement {
   value='';
   optionsObject=[];



//  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
//    objectInfo(result){
//     console.log('....result',result);
//     if(result && result.data){
//         console.log('get perticular field value..',result.data.fields.Name.value);
//     }
//    }

  /* @wire(getPicklistValues, { recordTypeId:'012000000000000AAA', fieldApiName: Industry_Field })
   propertyOrFunction(result){
    console.log('picklist Values are..',result);
    if(result && result.data)
    {
        this.optionsObject=result.data.values;
    }
   }*/
   
   @wire(getPicklistValuesByRecordType, { recordTypeId:'012000000000000AAA',objectApiName: ACCOUNT_OBJECT})
   propertyOrFunction({data,error}){
      if(data){
        console.log(data.picklistFieldValues);
        this.optionsObject = this.BuildTreeModel(data.picklistFieldValues);
      }
      else{
        console.log("Error"+error);
      }
   }
   BuildTreeModel(picklistValues){
          const treeNodes=[];
          Object.keys(picklistValues).forEach(picklist)=> {
            treeNodes.push({
                label:picklist,
                items:picklistValues[picklist].values.map(item)=>({
                    label:item.label,
                    name:item.value
                }))
            });
            
   }}
   
    
   handlechange(event){
    this.value = event.detail.value;
}
   

   get optionsObject(){
     return this.optionsObject;
   }
}
 
