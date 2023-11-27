import { LightningElement,api } from 'lwc';

export default class ParentComponent extends LightningElement {
    @api simba= "I am Simba";
    
    changeValueParent(event)
    {  this.simba = event.target.value;

       this.template.querySelector("c-child-component").changeValueChild();  
    }
}