import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListStatistiqueComponent } from './admin-list-statistique.component';

describe('AdminListStatistiqueComponent', () => {
  let component: AdminListStatistiqueComponent;
  let fixture: ComponentFixture<AdminListStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
