import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUserPlus, faBuilding, faMapMarkedAlt, faEnvelope, faGlobe, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nav: any;
  userData: any;
  userRepositories: any = [];
  repositoriesFiltered: any = [];

  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faBuilding = faBuilding;
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faTwitter = faTwitter;
  faStar = faStar;
  faCircle = faCircle;

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
        console.log(this.userRepositories);
        this.userRepositories.sort(function (a: any, b: any) {
          return b.stargazers_count - a.stargazers_count;
        });

        this.repositoriesFiltered = this.userRepositories;
      })
  }

  goToUserSite(site: string): void {
    window.open(site, '_blank');
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.repositoriesFiltered = this.userRepositories.filter((repositorie: any) => {
      return repositorie.name.includes(value)
    })
  }

  daysAgo(pushedAt: any) {
    let now = new Date();
    let repositoryPushedAt = new Date(pushedAt);
    let daysAgo = Math.floor((now.getTime() - repositoryPushedAt.getTime()) / (1000 * 60 * 60 * 24));
    return daysAgo;
  }
}
