import { LightningElement,track } from 'lwc';

export default class SearchButtonLable extends LightningElement {
    onClickButtonLable = "Show";
    myTitle="SalesForce Lerning";
    
    cardVisible =false;

   handleClickMethod(event){
        const lable =event.target.label;
        console.log("Value is :" + lable);
        console.log('I am in After Click');

        if(lable === "Show"){
            this.onClickButtonLable="Hide";
            this.cardVisible=true;
        }
        else if(lable==="Hide"){
            this.onClickButtonLable="Show";
            this.cardVisible = false;
        }
    }
}