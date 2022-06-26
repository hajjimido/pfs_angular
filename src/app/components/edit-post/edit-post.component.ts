import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';

import { PostService } from 'src/app/service/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  public actualStep: number = 1;
  public filesfrmbasededonne: any = [];
  public files: any = [];
  public available_places: any = [0, 1, 2];
  public principle_image: any = 0;
  basic_url: any = environment.host;
  idPrd: any;
  Post: any;
  forme: FormGroup;
  constructor(
    private postService: PostService,
    private toast: NgToastService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.idPrd = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Post = this.postService.getPostById(this.idPrd).subscribe(
      (res) => {
        this.Post = res;

        this.forme = this.fb.group({
          type: [this.Post.type, Validators.required],
          title: [this.Post.title, Validators.required],
          description: [this.Post.description, Validators.required],
          price: [this.Post.price, Validators.required],
        });
        console.log(this.Post.images);
        this.filesfrmbasededonne = this.Post.images;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePost(event: any) {
    const myForm = event.currentTarget;
    const data = new FormData(myForm);
    for (let i = 0; i < this.filesfrmbasededonne.length; i++) {
      fetch(this.filesfrmbasededonne[i].imageUrl)
        .then((res) => res.blob())
        .then((blob) => {
          this.files.splice(i, 0, blob);
        });
    }
    for (let file of this.files) {
      data.append('files', file);
    }

    this.postService.edit(data, this.idPrd);
  }

  nextStep() {
    for (let i = 0; i < this.filesfrmbasededonne.length; i++) {
      let my_image: any = document.getElementById('my_image_' + i);
      my_image.src =
        this.basic_url + '/post/image/' + this.filesfrmbasededonne[i].imageUrl;

      let my_image_container: any = document.getElementById(
        'my_image_container_' + i
      );
      my_image_container.classList.toggle('d-none');

      this.available_places.shift();
    }

    let step_one_container = document.getElementById(
      'step_one_container'
    ) as HTMLElement;
    let step_two_container = document.getElementById(
      'step_two_container'
    ) as HTMLElement;
    step_one_container.classList.toggle('to_the_left');
    step_two_container.classList.toggle('to_the_right');
    this.actualStep = 2;
  }

  previousStep() {
    let step_one_container = document.getElementById(
      'step_one_container'
    ) as HTMLElement;
    let step_two_container = document.getElementById(
      'step_two_container'
    ) as HTMLElement;
    step_one_container.classList.toggle('to_the_left');
    step_two_container.classList.toggle('to_the_right');
    this.actualStep = 1;
  }

  browseButton(event: any) {
    let file = event.target.files[0];
    this.dropProssess(file);
  }
  dragOver() {
    event?.preventDefault();
  }
  dragLeave() {
    event?.preventDefault();
  }
  drop(event: any) {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    this.dropProssess(file);
  }
  dropProssess(file: any) {
    let validFile = new RegExp('(png)|(jpg)|(jpeg)$');
    if (this.available_places.length == 0) {
      this.toast.error({
        detail: 'You have the right only for three images',
        duration: 2000,
      });
    } else if (validFile.test(file.type)) {
      let index = this.available_places[this.filesfrmbasededonne.length - 1];
      this.files.splice(index, 0, file);
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let imageUrl = fileReader.result;
        let my_image: any = document.getElementById('my_image_' + index);
        my_image.src = imageUrl;
        let my_image_container: any = document.getElementById(
          'my_image_container_' + index
        );
        my_image_container.classList.toggle('d-none');
        this.available_places.shift();
      };

      fileReader.readAsDataURL(file);
    } else {
      this.toast.error({
        detail: 'images must be type png or jpg',
        duration: 2000,
      });
    }
  }

  removeImage(i: number) {
    let my_image: any = document.getElementById('my_image_' + i);
    let my_image_container: any = document.getElementById(
      'my_image_container_' + i
    );
    if (this.principle_image == i) {
      this.principle_image = 0;
    }
    if (this.available_places.includes(i + 1) == false && i != 2) {
      let the_next_image: any = document.getElementById('my_image_' + (i + 1));
      let the_next_image_container: any = document.getElementById(
        'my_image_container_' + (i + 1)
      );
      let src = the_next_image.getAttribute('src');
      my_image.src = src;
      the_next_image.src = '';
      the_next_image_container.classList.toggle('d-none');
      this.available_places.push(i + 1);
    } else {
      my_image.src = '';
      my_image_container.classList.toggle('d-none');
      this.available_places.push(i);
    }

    this.files.splice(i, 1);
    this.available_places.sort();
  }

  favoriteImage(i: number) {
    this.principle_image = i;
  }
  getImg(i: any): String {
    return this.basic_url + '/post/image/' + this.files[0].imageUrl;
  }
}
