import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiEndPoint: string = 'https://freeapi.miniprojectideas.com/api/JobPortal/';

  constructor(private http: HttpClient) { }

  registerEmployer(obj: any) {
    return this.http.post(this.apiEndPoint +'AddNewEmployer', obj)
  }
 
  registerJobSeeker(obj: any) {
    return this.http.post(this.apiEndPoint +'AddNewJobSeeker', obj)
  }

  login(obj: any) {
    return this.http.post(this.apiEndPoint +'login', obj)
  }


}
