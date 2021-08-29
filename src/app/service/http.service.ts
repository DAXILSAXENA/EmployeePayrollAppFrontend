import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) { }

  getEmployeeData(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/employeepayrollservice/get");
  }

  addEmployeeData(body: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/employeepayrollservice/create", body);
  }

  deleteEmployeeData(id: any): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/employeepayrollservice/delete/"+id);
  }
}
