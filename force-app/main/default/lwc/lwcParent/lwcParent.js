import { LightningElement } from 'lwc';

export default class LwcParent extends LightningElement {
   
   CountValue=0;

   handsub(){
    this.CountValue--;
   }

   handleadd(){
   this.CountValue++;
   }

   handleMulitply(event){
    let multiplyNumber = event.detail;    //here we sending values according buttun clicking...means onclick event
   // alert('multiplying number==>'+multiplyNumber);

    this.CountValue = this.CountValue*multiplyNumber;
  }

}