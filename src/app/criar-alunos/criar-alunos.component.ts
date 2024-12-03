import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-alunos',
  standalone: false,
  
  templateUrl: './criar-alunos.component.html',
  styleUrl: './criar-alunos.component.css'
})
export class CriarAlunosComponent {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router){ }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe({
      next:data =>{ 
        console.log(data);
        this.goToEmployeeList();
      },
      error:error => console.log(error)
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/alunos']);
  }

  onSubmit(){
    console.log(this.employee)
    this.saveEmployee();
  }

}
