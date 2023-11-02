import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallsComponent } from './installs.component';

describe('InstallsComponent', () => {
  let component: InstallsComponent;
  let fixture: ComponentFixture<InstallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallsComponent]
    });
    fixture = TestBed.createComponent(InstallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
