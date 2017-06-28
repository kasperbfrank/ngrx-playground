import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountsPageComponent } from './mounts-page.component';

describe('MountsPageComponent', () => {
  let component: MountsPageComponent;
  let fixture: ComponentFixture<MountsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
