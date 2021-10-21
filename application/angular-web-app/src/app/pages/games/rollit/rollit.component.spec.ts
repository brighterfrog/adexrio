import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollitComponent } from './rollit.component';

describe('RollitComponent', () => {
  let component: RollitComponent;
  let fixture: ComponentFixture<RollitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
