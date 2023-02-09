import { Router } from '@angular/router';
import { User } from './../../user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nav: any;
  userData: User[] = [];

  constructor(private router: Router){
    this.nav = this.router.getCurrentNavigation();
    console.log(this.nav);
  }

  ngOnInit(): void{
    this.userData = this.nav.extras.state;
    console.log(this.userData);
  }
}
