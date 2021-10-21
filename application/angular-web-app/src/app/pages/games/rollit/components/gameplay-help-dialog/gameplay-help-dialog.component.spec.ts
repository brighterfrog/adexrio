import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayHelpDialogComponent } from './gameplay-help-dialog.component';

describe('GameplayHelpDialogComponent', () => {
  let component: GameplayHelpDialogComponent;
  let fixture: ComponentFixture<GameplayHelpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameplayHelpDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameplayHelpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
