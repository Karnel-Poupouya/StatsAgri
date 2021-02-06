import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluviometrieComponent } from './pluviometrie.component';

describe('PluviometrieComponent', () => {
  let component: PluviometrieComponent;
  let fixture: ComponentFixture<PluviometrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluviometrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluviometrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
