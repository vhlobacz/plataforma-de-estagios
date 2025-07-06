import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})
export class JobInfoComponent {
  @Input({ required: true }) vaga!: any;

  addCoin(value: string) {
    return ("R$ " + value );
  }
}
