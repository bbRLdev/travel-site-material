import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDisplayComponent } from './destination-display.component';

describe('DestinationDisplayComponent', () => {
  let component: DestinationDisplayComponent;
  let fixture: ComponentFixture<DestinationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
