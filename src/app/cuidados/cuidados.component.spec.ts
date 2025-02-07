import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cuidadosComponent } from './cuidados.component';

describe('CuidadosComponent', () => {
  let component: cuidadosComponent;
  let fixture: ComponentFixture<cuidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [cuidadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(cuidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
