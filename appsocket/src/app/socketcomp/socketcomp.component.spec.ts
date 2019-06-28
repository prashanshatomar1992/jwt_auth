import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketcompComponent } from './socketcomp.component';

describe('SocketcompComponent', () => {
  let component: SocketcompComponent;
  let fixture: ComponentFixture<SocketcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
