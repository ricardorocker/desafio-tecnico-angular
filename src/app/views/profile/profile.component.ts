import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUserPlus, faBuilding, faMapMarkedAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nav: any;
  userData: any;
  userRepositories: any;

  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faBuilding = faBuilding;
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faTwitter = faTwitter;

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

  goToUserSite(site: string): void {
    window.open(site, '_blank');
  }
}
