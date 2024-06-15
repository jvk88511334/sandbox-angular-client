import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vue1Component } from './vue1.component';

describe('Vue1Component', () => {
  let component: Vue1Component;
  let fixture: ComponentFixture<Vue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vue1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
