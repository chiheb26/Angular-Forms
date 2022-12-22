import { Component, ViewChild } from '@angular/core';
import{NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  @ViewChild("myForm")
  form!:NgForm;
  defaultCountry:string="india";
  firstname?:string;
  lastname?:string;
  mail?:string;
  gen?:string;
  country?:string;
  gender=[
    {id:'1',value:"Male"},
    {id:'2',value:"Female"},
    {id:'3',value:"Other"}
  ];
  defaultGender:string="Male";
  hobbies:any[]=[
    {id:0,value:"Sports",selected:false},
    {id:1,value:"Movies",selected:true},
    {id:2,value:"Music",selected:false}
  ];

  toggleCheckbox(id:any){
    this.hobbies[id].selected=!this.hobbies[id].selected;
  }
  //onSubmit(form:NgForm){
  onSubmit(){
    console.log(this.form);
    console.log(this.hobbies);
    this.firstname=this.form.value.personalDetails.firstname;
    this.lastname=this.form.value.personalDetails.lastname;
    this.mail=this.form.value.personalDetails.email;
    this.gen=this.form.value.gender;
    this.country=this.form.value.country;
    this.form.reset();
  }
  setDefaultValues(){
    //this.form.value.personalDetails.firstname="aa@bb.johncom";
    //this.form.value.personalDetails.lastname="Smith";
    //this.form.value.personalDetails.email="abc@example.com";
    // The structure of setValue object must match the structure of the NgForm.value  object
   /* this.form.setValue({
      country:'canada',
      gender:'Female',
    
      personalDetails:{
        firstname:'John',
        lastname:'Smith',
        email:'abc@example.com'
      }
    });
    */
   this.form.form.patchValue({personalDetails:{
    firstname:'John',
    lastname:'Smith',
    email:'abc@example.com'
  }});
  }
}
