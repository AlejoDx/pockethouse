import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaUnoComponent } from './casa-uno.component';

describe('CasaUnoComponent', () => {
  let component: CasaUnoComponent;
  let fixture: ComponentFixture<CasaUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaUnoComponent]
    });
    fixture = TestBed.createComponent(CasaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
