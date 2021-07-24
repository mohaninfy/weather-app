import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetail: any;
  constructor(private router: Router, private dataService: DataServiceService) {
    this.loginDetail = [{email: '', password: ''}];
   }

  ngOnInit(): void {
  }
  LoginFunc = (e) => {
}
}
