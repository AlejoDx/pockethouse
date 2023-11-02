import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningRoomComponent } from './dining-room.component';

describe('DiningRoomComponent', () => {
  let component: DiningRoomComponent;
  let fixture: ComponentFixture<DiningRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiningRoomComponent]
    });
    fixture = TestBed.createComponent(DiningRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
