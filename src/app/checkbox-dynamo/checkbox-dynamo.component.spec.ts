import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDynamoComponent } from './checkbox-dynamo.component';

describe('CheckboxDynamoComponent', () => {
  let component: CheckboxDynamoComponent;
  let fixture: ComponentFixture<CheckboxDynamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxDynamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDynamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
