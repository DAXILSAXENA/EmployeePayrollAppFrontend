import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public employeeCount: number = 10;
  public employeeDetails: Employee[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response=>
      {
        this.employeeDetails = response.data;
        this.employeeCount = this.employeeDetails.length;
        console.log(this.employeeDetails);
      });
  }

}
