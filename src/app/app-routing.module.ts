import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CriarAlunosComponent } from './criar-alunos/criar-alunos.component';
import { UpdateAlunosComponent } from './update-alunos/update-alunos.component';
import { EmployeeDatailsComponent } from './employee-datails/employee-datails.component';

const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full'},
  { path: 'alunos', component: EmployeeListComponent},
  { path: 'criar-alunos', component: CriarAlunosComponent},
  { path: 'update-alunos/:id', component: UpdateAlunosComponent},
  { path: 'employee-details/:id', component: EmployeeDatailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
