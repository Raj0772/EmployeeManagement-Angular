import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private router:Router)
   { }

  ngOnInit(): void {
  }
  saveEmployee() {
    this.employeeService.createemployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.gotoemployeelist();
        alert("Employee Added successfully");
      },
      error => {
        console.error(error);
        if (error.status === 400) {
                  }
      }
    );
  }
  

  gotoemployeelist(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();

  }
}
