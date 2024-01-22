import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee(); // Initialize with default values
  id: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getemployeebyid(this.id).subscribe(
      data => {
        console.log(data);
        this.employee = data;
      },
      error => console.log(error)
    );
  }

  // updateEmployee() {
  //   this.employeeService.updateEmployee(this.id, this.employee).subscribe(
  //     data => {
  //       console.log(data);
  //       this.employee = new Employee(); // Reset employee after update
  //       this.gotoemployeelist();
  //     },
  //     error => console.log(error)
  //   );
  // }

  onSubmit() {
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoemployeelist();
      alert("employee record Updated successfully")
      
    },error=>console.log(error));
  }

  gotoemployeelist(){
    this.router.navigate(['/employees']);
  }
}
