import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  loginForm =  new FormGroup ({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

  submitted = false;

  data = {
    username: '',
    password: ''
  };
  tokenUser: any;
  // Window.sessionStorage
  constructor(private formBuilder: FormBuilder, private Authservices: AuthService, private route: Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(5)]],
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.data = this.loginForm.value;
    this.Authservices.getToken(this.data);
  }
}
