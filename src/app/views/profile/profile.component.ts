import { UserService } from './../../services/user.service';
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
  userData: any;
  userRepositories: any;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.nav = this.router.getCurrentNavigation();
    this.userData = this.nav.extras.state;
  }

  ngOnInit(): void {
    this.getRepositories();
  }

  getRepositories(): void {
    this.userService.getRepositories(this.userData.login)
      .subscribe((repo) => {
        this.userRepositories = repo;
      })
  }
}
