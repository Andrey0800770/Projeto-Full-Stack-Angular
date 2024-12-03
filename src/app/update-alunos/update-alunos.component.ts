import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router'; 



@Component({
  selector: 'app-update-alunos',
  standalone: false,
  
  templateUrl: './update-alunos.component.html',
  styleUrl: './update-alunos.component.css'
})
export class UpdateAlunosComponent implements OnInit{
  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router){ }
 
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.employeeService.getEmployeeById(this.id).subscribe({
      next : data => {
        this.employee = data;
      }, error : error => console.log(error)
    })
  }
  onSubmit(){
    this.employeeService.updateAlunos(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/alunos']);
  }
}
