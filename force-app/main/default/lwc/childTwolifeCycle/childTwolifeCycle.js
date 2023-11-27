import { LightningElement } from 'lwc';

export default class ChildTwolifeCycle extends LightningElement {
    constructor(){
        super();
        console.log('I am in constructor child 2');  //this will be called only once
       }
    
        connectedCallback(){                            // called only once
            console.log('I am in connectedCallback child 2');
        }
    
        renderedCallback(){                    //called multiple time...This callback is used mainly for UI chnages after new data.
            console.log('I am in RenderCallBack child 2');
           }
         errorCallback(error){    //this wll be call when error occure
            console.log(error);
         }
       fireEvent(event){                              
             console.log('..First Event From Grand Child');
             const ev=new CustomEvent('grandchildevent',{bubbles:true,composed:true});
             this.dispatchEvent(ev);
       }  
    // Here parent = lifeCycledaDemo
    //  ImidiateParent = childlifeCycle
    //  child or grand child = childtwoCcycle

    //here we can pass  or dispatch the data child using custom event means here get imidiateParent in html using on keyword this custom event 
    //But here problem is passing data grandchild to parent... Twe cant get event of grantparent thats solving we use Bubble property 
    //we use in grand child = new customeEvent('',{bubbles:true,composed:true}) then dispatch this event 
    //if bubbles is  true then events is available and if composed is true then used for levelUp means we can access any level

    
}