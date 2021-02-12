import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluvioComponent } from './pluvio.component';

describe('PluvioComponent', () => {
  let component: PluvioComponent;
  let fixture: ComponentFixture<PluvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
