import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDosComponent } from './casa-dos.component';

describe('CasaDosComponent', () => {
  let component: CasaDosComponent;
  let fixture: ComponentFixture<CasaDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaDosComponent]
    });
    fixture = TestBed.createComponent(CasaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
