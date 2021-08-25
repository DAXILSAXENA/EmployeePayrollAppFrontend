import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public employeeCount: number = 10;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(data=>console.log(data));
  }

}
