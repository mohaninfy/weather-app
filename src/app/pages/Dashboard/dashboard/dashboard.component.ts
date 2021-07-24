import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataServiceService, private router: Router) {
    this.dataService.getUserData();
   }

  ngOnInit(): void {
  }
  LoginFunc = (e) => {
    this.router.navigate(['login']);
    // // const url = "https://sleepy-brook-95490.herokuapp.com/login"
    // const data = this.loginDetail[0];
    // this.dataService.loginUser(url, data).subscribe(res => {
    //   console.log('Response from server: ' + res);
    //   console.log('Response from server: ' + res);
    //   if (res) {
    //     this.dataService.setUserData(res);
    //     this.router.navigate(['login']);
    //     // this.props.functionCallFromParent(this.state.showRegister);
    //   }
    // });
}
    //   axios.post(url, data).then(res => {
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
