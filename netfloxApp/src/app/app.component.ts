import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(public userService: UserService) { }
  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.userService.getInfo(token)
        .subscribe((res: HttpResponse<any>) => {
          console.log(res);
        })
    }
  }
}
