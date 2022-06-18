import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;
  time: any;
  principleImageUrl: string;
  basic_url: string = environment.host;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.time = this.calculateData(this.post.creationDate);
    this.principleImageUrl =
      this.basic_url + '/post/image/' + this.post.images[0].imageUrl;
  }

  calculateData(date: string): any {
    let dateCreate: any;

    dateCreate = new Date(date);
    let Now: any = new Date();

    let finalMonth: any = Now.getMonth() - dateCreate.getMonth();
    let finlaDay = Now.getDay() - dateCreate.getDay();
    let finlHours = Now.getHours() - dateCreate.getHours();
    let finlMinutes = Now.getMinutes() - dateCreate.getMinutes();
    let finlSeconds = Now.getSeconds() - dateCreate.getSeconds();
    if (finalMonth > 0) {
      return finalMonth + ' months ago';
    }
    if (finlaDay > 0) {
      return finlaDay + ' days ago';
    }
    if (finlHours > 0) {
      return finlHours + ' hours ago';
    }
    if (finlMinutes > 0) {
      return finlMinutes + ' minutes ago';
    }
    if (finlSeconds > 0) {
      return finlSeconds + ' seconds ago';
    }
  }
  route_ver_detail(id: any) {
    this.route.navigateByUrl('/detail');
  }

  moveToPostPage(postSlug: string) {
    this.route.navigate(['/post', this.post.slug]);
  }
}
