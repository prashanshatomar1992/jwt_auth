import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatashareComponent } from './datashare.component';

describe('DatashareComponent', () => {
  let component: DatashareComponent;
  let fixture: ComponentFixture<DatashareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatashareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatashareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
