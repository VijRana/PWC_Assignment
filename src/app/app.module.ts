import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeePreviewComponent } from './components/employee-preview/employee-preview.component';

 const  routes: Route[] = [
  {path: '', component: EmployeeListComponent},
  {path : 'preview' , component: EmployeePreviewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeePreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
