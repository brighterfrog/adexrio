import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaChatBottomSheetComponent } from './arena-chat-bottomsheet.component';

describe('ArenaChatComponent', () => {
  let component: ArenaChatBottomSheetComponent;
  let fixture: ComponentFixture<ArenaChatBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenaChatBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaChatBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
