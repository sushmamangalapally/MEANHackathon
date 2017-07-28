import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledressComponent } from './singledress.component';

describe('SingledressComponent', () => {
  let component: SingledressComponent;
  let fixture: ComponentFixture<SingledressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
