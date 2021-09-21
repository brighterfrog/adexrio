import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateConversionService } from 'src/app/pages/games/rollit/helper-services/date-conversion.service';
import { WalletService } from 'src/app/pages/games/rollit/helper-services/wallet-service';
import { ShellService } from 'src/app/services/shell.service';
import { CostPerGameService } from './costpergame-service';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export interface CreateGameDialogData {
  VET: number;
  players: number;
  isAuditEnabled: boolean;
  createGame: boolean;
}

@Component({
  selector: 'app-create-game-dialog',
  templateUrl: './create-game-dialog.component.html',
  styleUrls: ['./create-game-dialog.component.scss']
})
export class CreateGameDialogComponent implements OnInit {

  formBuilder: FormBuilder;
  createGameForm: FormGroup;
  costPerGameService: CostPerGameService;

  vetBetMinValue = 1;
  minimumPlayerCount = 2;
  minimumVetPayoutAmount = 1;

  houseCommisionWitheldMinimum = 3;
  gameFeeInVETFromRandomOrg = 0;

  estimatedGameVETWinnings = 0;
  shellService: ShellService;

  binanceTickerVetPrice: number;

  constructor(
    formBuilder: FormBuilder,
    costPerGameService: CostPerGameService,
    shellService: ShellService,
    public dialogRef: MatDialogRef<CreateGameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateGameDialogData
  ) {
    this.shellService = shellService;
    this.formBuilder = formBuilder;
    this.costPerGameService = costPerGameService;
    this.createGameForm = this.formBuilder.group({
      betValueControl: new FormControl(this.vetBetMinValue, [
        Validators.required,
        Validators.min(this.vetBetMinValue),
        // Validators.max(this.vetBetMaxValue),
        Validators.pattern('[0-9]+')
      ]),
      playerCountControl: new FormControl(this.minimumPlayerCount, [
        Validators.required,
        Validators.min(this.minimumPlayerCount),
        // Validators.max(this.maxPercentChanceOfWinning),
        Validators.pattern('[0-9]+')
      ]),
      houseCommisionWitheldControl: new FormControl(this.houseCommisionWitheldMinimum),
      randomOrgGameFeeControl: new FormControl(),
      isRandomOrgDrawingControl: new FormControl(false, [this.validateAuditGameFeeCheckbox()]),
      estimatedGameVETWinningControl: new FormControl(this.estimatedGameVETWinnings, [
        Validators.min(1)
      ])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(): void {
    if (this.createGameForm.valid) {
      this.dialogRef.close({
        data: {
          VET: this.createGameForm.get('betValueControl').value,
          players: this.createGameForm.get('playerCountControl').value,
          isAuditEnabled: this.createGameForm.get('isRandomOrgDrawingControl').value,
          createGame: true
        } as CreateGameDialogData
      });
    }
  }
  ngOnInit(): void {
    this.createGameForm.get('houseCommisionWitheldControl').disable();
    this.createGameForm.get('randomOrgGameFeeControl').disable();
    this.createGameForm.get('estimatedGameVETWinningControl').disable();

    this.shellService.binanceApiService.binanceResponse.subscribe((result) => {
      this.binanceTickerVetPrice = result.price;
      this.commissionCritieraChanged();
    });
  }

  commissionCritieraChanged(): void {
    this.setAuditGameFeeCharge(this.createGameForm.get('isRandomOrgDrawingControl')?.value);
    this.setEstimatedGameWinnings();

    this.createGameForm.get('isRandomOrgDrawingControl').updateValueAndValidity();
  }

  setEstimatedGameWinnings(): void {
    const vetWager = this.createGameForm.get('betValueControl')?.value ?? 0;
    const players = this.createGameForm.get('playerCountControl')?.value ?? 0;
    const addGameFreeFromRandomOrgForAudit = this.createGameForm.get('isRandomOrgDrawingControl').value;

    const totalVetWagered = vetWager * players;

    const gameFeeFromRandomOrg = addGameFreeFromRandomOrgForAudit ? this.costPerGameService.getRandomOrgGameFeeBasedOnPlayers(players) : 0;
    const gameFeeInVETFromRandomOrg = addGameFreeFromRandomOrgForAudit ?
      (gameFeeFromRandomOrg /
        this.shellService.binanceApiService.binanceTickerResponseResult.price
      ) : 0;
    const totalAfterGameFee = totalVetWagered - gameFeeInVETFromRandomOrg;
    const houseEarnings =
      totalAfterGameFee * (this.houseCommisionWitheldMinimum / 100);

    const playerEarningsAfterExpenses = totalAfterGameFee - houseEarnings;

    this.estimatedGameVETWinnings = playerEarningsAfterExpenses;
    this.createGameForm.get('estimatedGameVETWinningControl').setValue(playerEarningsAfterExpenses.toFixed(4));
  }

  setAuditGameFeeCharge(isChecked: boolean): void {
    if (isChecked) {
      // get cost per player count
      const gameFeeInput = this.costPerGameService
        .getRandomOrgGameFeeBasedOnPlayers(
          this.createGameForm.get('playerCountControl')?.value
        );

      // set random org audit fee
      this.createGameForm.get('randomOrgGameFeeControl').setValue(gameFeeInput);
      this.gameFeeInVETFromRandomOrg = gameFeeInput / this.shellService.binanceApiService.binanceTickerResponseResult.price;
    } else {
      this.createGameForm.get('randomOrgGameFeeControl').setValue('');
    }
  }

  validateAuditGameFeeCheckbox(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value === true) {

        if (this.estimatedGameVETWinnings <= this.minimumVetPayoutAmount) {
          return { gameBetAuditFeeNotCovered: true };
        }

        return null;
      }
      return null;
    };
  }
}
