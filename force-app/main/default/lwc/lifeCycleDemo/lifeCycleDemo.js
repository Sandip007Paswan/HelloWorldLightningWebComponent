import { LightningElement,api,track } from 'lwc';

export default class LifeCycleDemo extends LightningElement {
   value=0 ;
  showchild1=true;

   constructor(){
     super();
     console.log('I am in cunstructor');
   }

   connectedCallback(){
      console.log('I am in connectedCallback');
   }

   renderedCallback(){
    console.log('I am in  parent RenderCallBack');
   }

   HandleChange(){
  
    this.value = this.value+1;
    console.log('...onclick Change value:'+this.value);
   }
   
   showHideChild1(event){
    console.log('Before value :'+this.showchild1);
    this.showchild1 = !this.showchild1;
    console.log('After Change :'+this.showchild1);
   }

    
   handleGrandChildEvent(event){
    console.log('...Event of grand child caught in grand parent');
  }
}

// Here parent = lifeCycledaDemo
    //  ImidiateParent = childlifeCycle
    //  child or grand child = childtwoCcycle

    //here we can pass  or dispatch the data child using custom event means here get imidiateParent in html using on keyword this custom event 
    //But here problem is passing data grandchild to parent... Twe cant get event of grantparent thats solving we use Bubble property 
    // we use in grand child = new customeEvent('',{bubbles:true,composed:true}) then dispatch this event
    //if bubbles is  true then events is available and if composed is true then used for levelUp means we can access any level