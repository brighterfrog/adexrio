import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncNotConnectedDialogComponent } from './sync-not-detected-dialog.component';

describe('DonateDialogComponent', () => {
  let component: SyncNotConnectedDialogComponent;
  let fixture: ComponentFixture<SyncNotConnectedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyncNotConnectedDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncNotConnectedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
