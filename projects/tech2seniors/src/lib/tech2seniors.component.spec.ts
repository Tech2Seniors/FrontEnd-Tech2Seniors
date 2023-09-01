import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tech2seniorsComponent } from './tech2seniors.component';

describe('Tech2seniorsComponent', () => {
  let component: Tech2seniorsComponent;
  let fixture: ComponentFixture<Tech2seniorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tech2seniorsComponent]
    });
    fixture = TestBed.createComponent(Tech2seniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
