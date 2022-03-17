import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatairesComponent } from './senataires.component';

describe('SenatairesComponent', () => {
  let component: SenatairesComponent;
  let fixture: ComponentFixture<SenatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
