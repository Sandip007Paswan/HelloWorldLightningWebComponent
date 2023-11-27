import { LightningElement } from 'lwc';

export default class ArrowEvent extends LightningElement {
    serchLet;

    connectedCallback()
    {
        let CallFunction = this.arrowFunEvent(70,10);
        window.alert('Callfunction by arrowEvent Funfunction :'+CallFunction);
    
    }
    arrowFunEvent = (devedent,div) =>{

        return(devedent/div);
    }
    
    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        console.log('The Enterd key is :'+isEnterKey);
        if (isEnterKey) {
            this.serchLet = evt.target.value;
            console.log('The value is :'+serchLet);
        }
    }
  
}

// There are few difference like in arrow function data binding occurs automatically but not in normal function  
// It is featured in ecmaScript6(modern js)....but you can use normal function too in lwc there is no issue with that