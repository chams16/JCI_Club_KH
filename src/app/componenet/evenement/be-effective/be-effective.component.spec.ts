import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BeEffectiveComponent} from './be-effective.component';

describe('BeEffectiveComponent', () => {
  let component: BeEffectiveComponent;
  let fixture: ComponentFixture<BeEffectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeEffectiveComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeEffectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
