import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElastalertlistComponent } from './elastalertlist.component';

describe('ElastalertlistComponent', () => {
  let component: ElastalertlistComponent;
  let fixture: ComponentFixture<ElastalertlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElastalertlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElastalertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
