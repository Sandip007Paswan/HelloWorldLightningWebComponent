import { LightningElement ,api} from 'lwc';

export default class LwcChild extends LightningElement {

      //here we use custom event to pass data child to parent 
      handleSubstarct(){
        const SubEvent = new CustomEvent('substract',{detail:''});
        this.dispatchEvent(SubEvent);
        

      }
      handleAdd(){
          this.dispatchEvent(new CustomEvent('add',{detail:''}));  // here dispatach means send or fired to parent
      }

      handleMul(event){
          let valueFormula=event.target.value;   //here we can passing value the 2 and 3 through button card
         // alert('Value For Multiply:'+valueFormula);
          this.dispatchEvent(new CustomEvent('multiply',{detail: valueFormula}));
      }

}