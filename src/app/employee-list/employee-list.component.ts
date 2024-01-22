import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees :Employee[];

  constructor(private employeeService :EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();

  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(
      data => {
        console.log('Received data:', data);
        this.employees = data;
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  employeeDetails(id:number){
    this.router.navigate(['employeedetails', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['updateemployee', id]);
  }
  deleteEmployee(id: number) {
    const confirmDelete = window.confirm(`Are you sure you want to delete Employee Record for ${id}?`);
  
    if (confirmDelete) {
      this.employeeService.deleteEmployee(id).subscribe(
        data => {
          alert(`Employee Record for ${id} Deleted Successfully`);
          this.getEmployees();
        },
        error => {
          console.error(error);

        }
      );
    }
  }
  

  }
  
