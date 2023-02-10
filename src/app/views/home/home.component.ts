import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  messageError: string = 'Por favor, digite no mínimo 2 caracteres';

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
          (err) => {
            if (err.error.message === 'Not Found') {
              this.messageError = 'Usuário não encontrado, favor verificar nome digitado.'
            } else {
              this.messageError = 'Erro na requisição do gitHub.'
            }
            this.searchForm.get('username')?.setErrors({'incorrect': true});
          }
        );
    } else {
      this.searchForm.get('username')?.markAsTouched();
      this.messageError = 'Por favor, digite no mínimo 2 caracteres';
    }
  }
}
