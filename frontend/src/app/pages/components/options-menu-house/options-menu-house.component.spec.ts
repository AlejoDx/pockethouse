import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsMenuHouseComponent } from './options-menu-house.component';

describe('OptionsMenuHouseComponent', () => {
  let component: OptionsMenuHouseComponent;
  let fixture: ComponentFixture<OptionsMenuHouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsMenuHouseComponent]
    });
    fixture = TestBed.createComponent(OptionsMenuHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
