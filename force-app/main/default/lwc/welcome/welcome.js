import { LightningElement } from 'lwc';

export default class Welcome extends LightningElement 
{
    connectedCallback()
    {
       console.log('Connected Call Back...Now');
       var var_Name = 'Sandip'; 
       console.log('Var data type I can Take:'+var_Name);
       let a= true;
       let b = 20.2;
       let c = 'I am String Type';
       let d = false;
       
       console.log('The value is ==>'+a+'==>Type of value a is ='+typeof a);  // number
       console.log('Type of value b is ='+typeof b);  // number
       console.log('Type of value c is ='+typeof c);   // String
       console.log('Type of value d is ='+typeof d);    // boolean

       a=50;
       console.log('Type of value a is ='+a);    // here a value is override to 10
      /* var numb = '1234';    //   this var type give Error why ?
       consol.log('=====>Var Name Value...+==>'+numb+'===Type of Value is==>'+typeof numb);
      */
      var num_b=1234;
    console.log('===>'+num_b);
      var num_b='Sandip Paswan';
    console.log('Updated Value===>'+num_b);

      /* let num_ba=1234;                This give error in let type because here is not alowed to use same name of variable
                                                           but in var using same name of varibale  we can override the first
       let num_ba='Sandip paswan';*/
       //for let type we  can use same or other name of variable in scope
       {
         let a=1000;
         console.log('The value in Scope is :'+a);
       }
       //here a=50;
       console.log('Here the value whose not updated:'+a);

       const Pi=3.14;
       let r=25;
       console.debug('the Area of Circle is :'+3.14*r*r);
       //Pi=40;   
      // console.debug('The value is:'+Pi);

      let ArrayNum = [1,2,3,4,5,6];
      let MixedArray = [1,'Don',3,'Rahul','Sandip',125,false,true];

      console.log('The o/p for on type value of Array is :'+ArrayNum);
      console.log('The value for mixed Array :'+MixedArray);

      console.log('First Element of Array==>'+ArrayNum[0]);//using this according to index we can fetch the values

      //using push function we add the value at the end of existing array
      console.log('Array before use push method:'+MixedArray);
      MixedArray.push('Balbasur');
      console.log('After Using push we can add element at the end of existing array:'+MixedArray);

      //Apex statement to get size of Array=Array.size();

      
      

      //pop() method : This method used to remove last element of array

      let lstRemoveElement=MixedArray.pop();
      console.log('After removing last element of Array:'+MixedArray);
      console.log('Last rempved element is :'+ lstRemoveElement);

      MixedArray.forEach
      (
        (value,Index) =>
        {
          console.log(Index +'::'+ value);
        }
      )
      

    //splice method =Using splice we can add Any position or replace any element on the index of Array also we delete any number
    
    MixedArray.splice(1,0,'Don1');  // here inserting the element at the index 1 position
    console.log('Here inserting the element at index 1 or position 2 : :'+MixedArray);
    
     MixedArray.splice(3,2,'Don1','Don2','Don3','Don4'); //here index number 3 is start and here 2 means we can delete the value two index number from index number 3 and after the we add element on index number 3
    
     console.log('After get :'+MixedArray);
     //before using toStrring method 
     console.log('using ToString we get :'+typeof MixedArray);
      //toString = Its used to get converted all values in String 

    console.log('All differnt types values :'+MixedArray.toString());
    console.log('using ToString we get :'+typeof MixedArray.toString());


     //let Person={} // here curly bracket represent object and this object can hold the variable person

    let person = {
        "name" : "Bandu",
         "Dob" : "1/12/2000",
         "Place" : "Sangli",
         "Age" : 28,
         "isGraduate" : false 

    };

    console.log('...Person Object :'+person);  //...Person Object :[object Object] [Questions: here what is two object ]

    console.log('...Person Object :' ,person);  // here we can fetch all data person in the form of object

    //JSON.stringfy(Object(variableName)): this method is used to convert object into String

    console.log('here We can fetch the Data in String Form :'+JSON.stringify(person)); 
    console.log('The type of data here get :'+typeof JSON.stringify(person));

    //to fetch individual data we have two statement
    //This can using dot notation
    console.log('The age of person is ::'+person.Age);

    console.log('The place of person is ::'+person.Place);

   // This can using array notation
    console.log('The age of person is :'+person['Age']);

    let shubh = 'Age';
   console.log('The Age type is :'+typeof shubh);
      
    console.log('The age adding dyanamically==>'+person[shubh]); 
    person[shubh]='50'; 
    console.log('The age adding dyanamically==>'+person[shubh]);
    }

   
}

