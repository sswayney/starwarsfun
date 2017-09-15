import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSimpleComponent } from './person-simple.component';

describe('PersonSimpleComponent', () => {
  let component: PersonSimpleComponent;
  let fixture: ComponentFixture<PersonSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
