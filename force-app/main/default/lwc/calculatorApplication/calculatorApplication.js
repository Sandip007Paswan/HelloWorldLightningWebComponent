import { LightningElement } from 'lwc';

export default class CalculatorApplication extends LightningElement {
    Result;
    N1;
    N2;
    handleNum1(event)
    {
        this.N1=event.target.value;
    }
    handleNum2(event)
    {
        this.N2=event.target.value;
    }
    
    callAddition(event)
    {
        //alert('I am in callAdd method');
        this.Result = parseInt(this.N2) + parseInt(this.N1);
    }
    callSubscraption(event)
    {
       this.Result = parseInt(this.N1) - parseInt(this.N2);
    }
    callMultification(event)
    {
        this.Result = parseInt(this.N1) * parseInt(this.N2);
    }
    callDivision(event)
    {
        this.Result = parseInt(this.N1) / parseInt(this.N2);
    }
}