import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mySubscription: any;
  constructor(private dataService: DataServiceService, private router: Router, private http: HttpClient) {
    this.dataService.getUserData();
  }

  ngOnInit(): void {
  }
  LoginFunc = (e) => {
    this.router.navigate(['login']);
  }
  getForeCastDetails = (e) => {
    console.log('getforecast', e);
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'madurai' + '&appid=b9feb11dd0284ae1a415f94d50777169';
    this.mySubscription = this.dataService.getForeCast(url).subscribe(data => {
      console.log('Present weather', data);
      url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + 'madurai' + '&appid=b9feb11dd0284ae1a415f94d50777169';
      this.mySubscription = this.dataService.getForeCast(url).subscribe(data2 => {
        console.log('Full ForeCast weather', data2);
      });
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
