import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public actualStep:number = 1;
  public files :any = [];
  public available_places:any = [0,1,2];
  public principle_image:any = 0;

  constructor(private postService : PostService,
              private toast : NgToastService
              ) { }

  ngOnInit(): void {

  }

  createPost(event:any){
    if(this.files.length >= 2){
      let cte = this.files[0];
      this.files[0] = this.files[1];
      this.files[1]=cte;
    }
    const myForm = event.currentTarget;
    const data = new FormData(myForm);
    for(let file of this.files){
      data.append("files",file);
    }
    this.postService.createPost(data);
  }

  nextStep(){
    let step_one_container = document.getElementById("step_one_container") as HTMLElement;  
    let step_two_container = document.getElementById("step_two_container") as HTMLElement;  
    step_one_container.classList.toggle("to_the_left");
    step_two_container.classList.toggle("to_the_right");
    this.actualStep = 2;
  }

  previousStep(){
    let step_one_container = document.getElementById("step_one_container") as HTMLElement;  
    let step_two_container = document.getElementById("step_two_container") as HTMLElement;  
    step_one_container.classList.toggle("to_the_left");
    step_two_container.classList.toggle("to_the_right");
    this.actualStep = 1;
  }

  browseButton(event:any){
    let file = event.target.files[0];
    this.dropProssess(file)
  }
  dragOver(){
    event?.preventDefault();
    
  }
  dragLeave(){
    event?.preventDefault();
  }
  drop(event:any){
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    this.dropProssess(file);
  }
  dropProssess(file :any){
    let validFile = new RegExp("(png)|(jpg)|(jpeg)$");
    if(this.available_places.length == 0){
      this.toast.error(
        {detail:"You have the right only for three images",
        duration:2000});
    }
    else if(validFile.test(file.type)){
      let index = this.available_places[0];
      this.files.splice(index,0,file);
      let fileReader = new FileReader();
      fileReader.onload=(()=>{
        let imageUrl =  fileReader.result;
        let my_image:any = document.getElementById("my_image_"+index);
        my_image.src = imageUrl;
        let my_image_container:any = document.getElementById(
          "my_image_container_"+index);
        my_image_container.classList.toggle("d-none");
        this.available_places.shift();
      });
      fileReader.readAsDataURL(file);
    }
    else{
      this.toast.error(
        {detail:"images must be type png or jpg",
        duration:2000});
    }
  }

  removeImage(i:number){
    let my_image:any = document.getElementById("my_image_"+i);
    let my_image_container:any = document.getElementById("my_image_container_"+i);
    if(this.principle_image == i){
        this.principle_image = 0;
    }
    if(this.available_places.includes(i+1) == false && i!=2){
      let the_next_image:any = document.getElementById("my_image_"+(i+1));
      let the_next_image_container:any = document.getElementById("my_image_container_"+(i+1));
      let src = the_next_image.getAttribute("src");
      my_image.src = src;
      the_next_image.src = "";
      the_next_image_container.classList.toggle("d-none");
      this.available_places.push(i+1);
      
    }
    else{
      my_image.src="";
      my_image_container.classList.toggle("d-none");
      this.available_places.push(i);
    }

    this.files.splice(i,1);
    this.available_places.sort();
  }

  favoriteImage(i:number){
    this.principle_image = i;
  }
}
