import { ComponentFixture, TestBed } from '@angular/core/testing';

import { descripcionComponent } from './descripcion.component';

describe('DescripcionComponent', () => {
  let component: descripcionComponent;
  let fixture: ComponentFixture<descripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [descripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(descripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
