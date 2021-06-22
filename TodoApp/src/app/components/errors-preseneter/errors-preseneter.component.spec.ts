import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsPreseneterComponent } from './errors-preseneter.component';

describe('ErrorsPreseneterComponent', () => {
  let component: ErrorsPreseneterComponent;
  let fixture: ComponentFixture<ErrorsPreseneterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsPreseneterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsPreseneterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
