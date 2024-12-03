import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { UpdateAlunosComponent } from './update-alunos/update-alunos.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseURL = "http://localhost:8080/api/alunos/todos";
  constructor(private httpClient: HttpClient) { }
getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:8080/api/alunos/todos');
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post('http://localhost:8080/api/alunos/cadastrar', employee);
  }
  updateAlunos(id: number, employee:Employee ): Observable< Object >{
    return this.httpClient.put< Employee > ( `http://localhost:8080/api/alunos/atualizar/${id}`, employee );
  }
  getEmployeeById(id: number): Observable<Employee>{
  return this.httpClient.get<Employee>(`http://localhost:8080/api/alunos/${id}`);
  }
  deleteEmployee(id: number){
    return this.httpClient.delete< Employee > ( `http://localhost:8080/api/alunos/deletar/${id}` );
  }
}
