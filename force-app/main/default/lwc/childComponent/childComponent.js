import { LightningElement ,api} from 'lwc';

export default class ChildComponent extends LightningElement {
    //here we use @api like a global varibale
   @api ItemName = "I am Lerning Now @api Decorator child Component ";

   // Now To expose a public method, decorate it with @api. public methods are part of a components API.
   // now change the itemName property using button click

   @api changeValueChild()
   {  
       
       this.itemName = "I am now in method @api decorator";
   }
}