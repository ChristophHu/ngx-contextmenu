import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContextmenu } from './ngx-contextmenu';

describe('NgxContextmenu', () => {
  let component: NgxContextmenu;
  let fixture: ComponentFixture<NgxContextmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxContextmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxContextmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
