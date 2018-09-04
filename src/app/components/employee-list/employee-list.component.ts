import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../components/model/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {
  @Output() sendDetail: EventEmitter<Employee[]> = new EventEmitter();
  employes: Employee[];
  constructor(private route: Router) {
    this.employes = [
      new Employee('Ashish', 4),
      new Employee('Ramesh', 3),
      new Employee('Rana', 2),
      new Employee('Himesh', 1)
    ];
  }
  sortedEmployee(): Employee[] {
   return this.employes.sort((a: Employee, b: Employee) => b.rank - a.rank);
 }

  rankUp(emp: Employee): boolean {
    emp.rankUp();
     return false;
  }
  rankDown(emp: Employee): boolean {
    emp.rankDown();
    return false;
  }
  goToEmployeeDetailsPage() {
    this.route.navigate(['preview']);
    this.sendDetail.emit(this.employes);
  }
}
