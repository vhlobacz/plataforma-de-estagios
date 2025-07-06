import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
// import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @Output() loginUpdate = new EventEmitter <any> ()
  loginObj: any = {
    "UserName": "",
    "Password": ""
  }

  constructor(private jobSrv: JobService, private router: Router) {}

  onLogin() {
    this.jobSrv.login(this.loginObj).subscribe((res: any)=> {
      if(res.result) {
        alert('User Logged in Success')
        localStorage.setItem('jobLoginUser', JSON.stringify(res.data));        
        this.router.navigateByUrl('/home').then(() => {
          window.location.reload();
        });
        } else {
        alert(res.message)
      }
    })
  }
}
