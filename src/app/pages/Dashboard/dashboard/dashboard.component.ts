import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataServiceService) {
    this.dataService.getUserData();
   }

  ngOnInit(): void {
  }

}
