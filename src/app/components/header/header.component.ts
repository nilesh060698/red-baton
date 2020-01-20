import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:string = '';
  tempArray = [];
  name:string = '';
  constructor() { }

  ngOnInit() {
    this.user = 'Nilesh Tiwari';
    this.name = this.user;
    this.tempArray = this.user.split(' ');
    this.user = this.tempArray[0][0] + this.tempArray[1][0];
    console.log(this.user);
  }

}
