import { Router } from '@angular/router';
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
    private user: UserService,
    private router: Router
  ) { }

  public searchForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]]
  })

  submitForm(): void {
    if (this.searchForm.valid) {
      this.user.getUser(this.searchForm.get('username')?.value)
        .subscribe((user) => {
          this.router.navigateByUrl('/perfil', {
            state: user
          })
        },
          error => console.log(error.message)
        );
    } else {
      this.searchForm.get('username')?.markAsTouched();
    }
  }
}
