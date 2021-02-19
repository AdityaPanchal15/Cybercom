import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCrmComponent } from './list-crm.component';

describe('ListCrmComponent', () => {
  let component: ListCrmComponent;
  let fixture: ComponentFixture<ListCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
