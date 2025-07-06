import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
// export class RegistrationComponent {

//   employerObj: any = {
//     "EmployerId": 0,
//     "CompanyName": "",
//     "EmailId": "",
//     "MobileNo": "",
//     "PhoneNo": "",
//     "CompanyAddress": "",
//     "City": "",
//     "State": "",
//     "PinCode": "",
//     "LogoURL": "",
//     "GstNo": ""
//   };

//   jobSeekerObj: any = {
//     "JobSeekerId": 0,
//     "FullName": "",
//     "EmailId": "",
//     "MobileNo": "",
//     "ExperienceStatus": "",
//     "ResumeUrl": "",
//     "JobSeekerSkills": [],
//     "JobSeekerWorkExperiences": []
//     }

//   isJobSeeker: boolean = true;

//   constructor(private job: JobService) { }

//   register() {
//     this.job.registerEmployer(this.employerObj).subscribe((res:any)=>{
//       if(res.result) {
//         alert(res.message)
//       } else {
//         alert(res.message)
//       }
//     })
//   }
//   registerJobSeeker() {
//     this.job.registerJobSeeker(this.jobSeekerObj).subscribe((res:any)=>{
//       if(res.result) {
//         alert(res.message)
//       } else {
//         alert(res.message)
//       }
//     })
//   }

// }


export class RegistrationComponent {

    employerObj: any = {
    "EmployerId": 0,
    "CompanyName": "",
    "EmailId": "",
    "MobileNo": "",
    "PhoneNo": "",
    "CompanyAddress": "",
    "City": "",
    "State": "",
    "PinCode": "",
    "LogoURL": "",
    "GstNo": ""
  };

  jobSeekerObj: any = {
    "JobSeekerId": 0,
    "FullName": "",
    "EmailId": "",
    "MobileNo": "",
    "ExperienceStatus": "",
    "ResumeUrl": "",
    "JobSeekerSkills": [],
    "JobSeekerWorkExperiences": []
    }

  employerForm: FormGroup;
  jobSeekerForm: FormGroup;
  isJobSeeker: boolean = true;

  constructor(private job: JobService, private fb: FormBuilder) {
    // Formulário para Employer
    this.employerForm = this.fb.group({
      CompanyName: ['', [Validators.required, Validators.minLength(3)]],
      EmailId: ['', [Validators.required, Validators.email]],
      MobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Regex para validar número de telefone
      PhoneNo: ['', [Validators.pattern('^[0-9]{10,15}$')]], // Regex para telefone fixo
      CompanyAddress: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      PinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]], // Regex para código postal
      LogoURL: [''],
      GstNo: ['', Validators.pattern('^[A-Z0-9]{15}$')] // Regex para GST No
    });

    // Formulário para Job Seeker
    this.jobSeekerForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]],
      EmailId: ['', [Validators.required, Validators.email]],
      MobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Regex para validar número de telefone
      ExperienceStatus: ['', Validators.required],
      ResumeUrl: ['', Validators.required],
      JobSeekerSkills: [[]], // Pode ser uma lista de habilidades
      JobSeekerWorkExperiences: [[]] // Experiência de trabalho
    });
  }

  // Função para registrar o empregador
  register() {
    if (this.employerForm.invalid) {
      alert('Formulário inválido. Verifique os campos!');
      return;
    }

    this.job.registerEmployer(this.employerForm.value).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }

  // Função para registrar o candidato
  registerJobSeeker() {
    if (this.jobSeekerForm.invalid) {
      alert('Formulário inválido. Verifique os campos!');
      return;
    }

    this.job.registerJobSeeker(this.jobSeekerForm.value).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
}
