import { Component, OnInit } from '@angular/core';
import { Employee } from '../../components/model/employee';
@Component({
  selector: 'app-employee-preview',
  templateUrl: './employee-preview.component.html',
  styleUrls: ['./employee-preview.component.css']
})
export class EmployeePreviewComponent implements OnInit {
 emplyees: Employee[];
  constructor() { }

  ngOnInit() {
  }
  getDetails(value: any) {
   this.emplyees = value;
  }

}
