import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaoComponent } from './cacao.component';

describe('CacaoComponent', () => {
  let component: CacaoComponent;
  let fixture: ComponentFixture<CacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
