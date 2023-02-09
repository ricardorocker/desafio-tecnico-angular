import { User } from './../../user';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private formBuilder: FormBuilder,
    private user: UserService
    ) { }

  public searchForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required]
  })

  submitForm(): void {
    this.user.getUser(this.searchForm.get('username')?.value)
      .subscribe(user => console.log(user));
  }

}
