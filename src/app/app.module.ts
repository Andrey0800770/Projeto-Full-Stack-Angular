import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CriarAlunosComponent } from './criar-alunos/criar-alunos.component';
import { FormsModule } from '@angular/forms';
import { UpdateAlunosComponent } from './update-alunos/update-alunos.component';
import { EmployeeDatailsComponent } from './employee-datails/employee-datails.component'


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CriarAlunosComponent,
    UpdateAlunosComponent,
    EmployeeDatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
