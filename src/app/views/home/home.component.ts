import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private formBuilder: FormBuilder) { }

  public searchForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required]
  })

  submitForm(): void {
    console.log(this.searchForm);
  }

}
