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
    // this.props.functionCallFromParent(this.state.showRegister);
    //const url = 'http://voting-assign.herokuapp.com/http://voting-front-end.herokuapp.com/login/';
    //const url = 'http://voting-assign.herokuapp.com/login/';
    const url = "https://sleepy-brook-95490.herokuapp.com/login"
    const data = this.loginDetail[0];
    this.dataService.loginUser(url, data).subscribe(res => {
      console.log('Response from server: ' + res);
      console.log('Response from server: ' + res);
      if (res) {
        this.dataService.setUserData(res);
        this.router.navigate(['dashboard']);
        // this.props.functionCallFromParent(this.state.showRegister);
      }
    });
    // axios.post(url, data).then(res => {
    //   // this.props.functionCallFromParent(this.state.showRegister);
    //   console.log('Response from server: ' + res);
    //   console.log('Response from server: ' + res.data.user);
    //   if (res.data.user) {
    //     this.router.navigate(['dashboard', {data: res}]);
    //     // this.props.functionCallFromParent(this.state.showRegister);
    //   }
    // }).catch(err => {
    //   console.log ('Error of post:' + err);
    //  // this.props.functionCallFromParent(this.state.showRegister);

    // });
}
}
