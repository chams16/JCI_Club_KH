import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutNumbersComponent} from './about-numbers.component';

describe('AboutNumbersComponent', () => {
  let component: AboutNumbersComponent;
  let fixture: ComponentFixture<AboutNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutNumbersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
