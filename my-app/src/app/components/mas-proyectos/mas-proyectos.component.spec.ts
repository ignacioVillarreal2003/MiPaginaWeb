import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasProyectosComponent } from './mas-proyectos.component';

describe('MasProyectosComponent', () => {
  let component: MasProyectosComponent;
  let fixture: ComponentFixture<MasProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasProyectosComponent]
    });
    fixture = TestBed.createComponent(MasProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
