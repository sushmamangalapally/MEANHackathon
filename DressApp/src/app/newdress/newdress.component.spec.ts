import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdressComponent } from './newdress.component';

describe('NewdressComponent', () => {
  let component: NewdressComponent;
  let fixture: ComponentFixture<NewdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
