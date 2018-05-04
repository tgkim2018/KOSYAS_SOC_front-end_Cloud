import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulllogsComponent } from './fulllogs.component';

describe('FulllogsComponent', () => {
  let component: FulllogsComponent;
  let fixture: ComponentFixture<FulllogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulllogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulllogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
