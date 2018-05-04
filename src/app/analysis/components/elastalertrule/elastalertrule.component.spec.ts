import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElastalertruleComponent } from './elastalertrule.component';

describe('ElastalertruleComponent', () => {
  let component: ElastalertruleComponent;
  let fixture: ComponentFixture<ElastalertruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElastalertruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElastalertruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
