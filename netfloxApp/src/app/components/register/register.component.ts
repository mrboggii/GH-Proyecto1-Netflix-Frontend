import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl('pepe', Validators.required),
    password: new FormControl('12345'),
    email: new FormControl('pepe@gmail.com')
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {}
  
  click_register() {
    console.log(this.userForm.value);
    this.apiService.register(this.userForm.value).then(
      res => {
        this.router.navigateByUrl('/login');
      },
      err => {
        console.error(err);
      }
    );
  }
}
