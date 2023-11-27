import { LightningElement ,api, track} from 'lwc';

export default class TrackDecorator extends LightningElement {
     @track FullName={first_name: "",last_Name:""}  // here we using FullName Obeject
    
    handleChange(event)
    {
        const field = event.target.name;
       // window.alert('I am in : '+field);
        if(field == 'FirstName')
        {
            this.FullName.first_name = event.target.value;
            
        }
        else if(field =='LastName')
        {
            this.FullName.last_Name =event.target.value;

        }
    
    
    }
}