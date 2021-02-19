import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrmComponent } from './add-crm.component';

describe('AddCrmComponent', () => {
  let component: AddCrmComponent;
  let fixture: ComponentFixture<AddCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
