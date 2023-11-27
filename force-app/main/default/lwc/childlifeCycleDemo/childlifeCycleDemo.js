import { LightningElement } from 'lwc';

export default class ChildlifeCycleDemo extends LightningElement {
   constructor(){
    super();
    console.log('I am in constructor child 1');
   }

    connectedCallback(){
        console.log('I am in connectedCallback child 1');
    }

    renderedCallback(){
        console.log('I am in RenderCallBack child 1' );
       }

    disconnectedCallback(){
        console.log('...Child 1 disconnected call Back');
    } 
    
    handleChildOneEvent(){
            console.log('...Grand child Event Found in mid parent');
    }
}