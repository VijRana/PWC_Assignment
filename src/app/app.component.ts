import { Component } from '@angular/core';
import { Employee } from './components/model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 employes: Employee[];
 constructor() {
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
}



