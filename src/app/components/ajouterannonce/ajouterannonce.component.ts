import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouterannonce',
  templateUrl: './ajouterannonce.component.html',
  styleUrls: ['./ajouterannonce.component.css']
})
export class AjouterannonceComponent implements OnInit {

  constructor(private http:HttpClient){}
  name:string="";
  file:any;
  ngOnInit(): void {
    
  }
  getName(name:string){
    this.name=name;
  }
  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }
  submitData():void{
    let formData =  new FormData;
    formData.set("name",this.name);
    formData.set("file",this.file);
    this.http.post("http://localhost:3000",formData).subscribe(
      (response)=>{}
    );
  }
}
