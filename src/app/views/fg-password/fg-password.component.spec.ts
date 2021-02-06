import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgPasswordComponent } from './fg-password.component';

describe('FgPasswordComponent', () => {
  let component: FgPasswordComponent;
  let fixture: ComponentFixture<FgPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FgPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
