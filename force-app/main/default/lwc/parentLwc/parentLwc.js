import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {

startCounter=0; //this for parent to child
    
      handleStartChange(event){
       //  this.startCounter = event.target.value;  // here we get data in concat Format
           this.startCounter = parseInt(event.target.value); 
      }

      handleMaximizeCounter(){
        //here child component method calling we use
        const updateCounter =this.template.querySelector('c-child-lwc');
        updateCounter.maximizeCounnter();                      //here calling child method then here which type of relation happen... ?
        //this.template.querySelector('c-lwc-child').maximizeCounnter();
        
     }
}