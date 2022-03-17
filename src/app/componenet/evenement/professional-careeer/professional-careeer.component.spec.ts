import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCareeerComponent } from './professional-careeer.component';

describe('ProfessionalCareeerComponent', () => {
  let component: ProfessionalCareeerComponent;
  let fixture: ComponentFixture<ProfessionalCareeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCareeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCareeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
