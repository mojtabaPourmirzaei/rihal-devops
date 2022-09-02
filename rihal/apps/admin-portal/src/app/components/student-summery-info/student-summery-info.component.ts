import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentSummeryInfo } from '@rihal/data-models';

@Component({
  selector: 'rihal-student-summery-info',
  templateUrl: './student-summery-info.component.html',
  styleUrls: ['./student-summery-info.component.scss'],
})
export class StudentSummeryInfoComponent implements OnInit {
  @Input() summery!: StudentSummeryInfo;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoStudentList(displyby: string) {
    this.router.navigate([
      '/students',
      { displyby: displyby ? displyby : null },
    ]);
  }
}
