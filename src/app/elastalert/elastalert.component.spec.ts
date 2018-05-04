import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElastalertComponent } from './elastalert.component';

describe('ElastalertComponent', () => {
  let component: ElastalertComponent;
  let fixture: ComponentFixture<ElastalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElastalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElastalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
