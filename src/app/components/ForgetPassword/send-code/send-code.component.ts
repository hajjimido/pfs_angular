import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['./send-code.component.css']
})
export class SendCodeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  send(f:NgForm){
    this.authService.sendMailToClient(f.value.username);
    
  }

}
