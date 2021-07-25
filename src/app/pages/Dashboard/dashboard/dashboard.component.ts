import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
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
    const url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'Bangalore' + '&appid=b9feb11dd0284ae1a415f94d50777169';
    const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + 'Bangalore' + '&appid=b9feb11dd0284ae1a415f94d50777169';
    this.mySubscription = forkJoin(this.dataService.getForeCast(url1), this.dataService.getForeCast(url2)).subscribe((res) => {
      console.log('Present weather', res[0]);
      console.log('Full ForeCast weather', res[1]);
    });
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
