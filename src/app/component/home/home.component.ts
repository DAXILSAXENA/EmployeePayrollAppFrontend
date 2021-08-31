import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public employeeCount: number = 10;
  public employeeDetails: Employee[] = [];

  constructor(private httpService: HttpService, private dataService : DataService,private router : Router) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeDetails = response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }

  remove(id: number) {
    this.httpService.deleteEmployeeData(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  update(employee: Employee): void {
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add/' + employee.employeeId);
  }
}
