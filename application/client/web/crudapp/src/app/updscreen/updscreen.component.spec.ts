import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdscreenComponent } from './updscreen.component';

describe('UpdscreenComponent', () => {
  let component: UpdscreenComponent;
  let fixture: ComponentFixture<UpdscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});