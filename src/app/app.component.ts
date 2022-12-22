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
  }

}
