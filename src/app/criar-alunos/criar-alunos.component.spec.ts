import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlunosComponent } from './criar-alunos.component';

describe('CriarAlunosComponent', () => {
  let component: CriarAlunosComponent;
  let fixture: ComponentFixture<CriarAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
