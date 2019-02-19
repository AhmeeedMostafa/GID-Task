import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOppComponent } from './update-opp.component';

describe('UpdateOppComponent', () => {
  let component: UpdateOppComponent;
  let fixture: ComponentFixture<UpdateOppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
