
import { RollitComponent } from './games/rollit/rollit.component';
import { DashboardComponent } from './games/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateGameDialogComponent } from './games/rollit/components/create-game-dialog/create-game-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ArenaChatBottomSheetComponent } from './games/rollit/components/arena-chat/arena-chat-bottomsheet.component';

import { AboutComponent } from './about/about.component';
import { ConnexGuard } from '../guards/connex.guard';
import { GameplayHelpDialogComponent } from './games/rollit/components/gameplay-help-dialog/gameplay-help-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'rollit',
    component: RollitComponent,
    canActivate: [ConnexGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    RollitComponent,
    DashboardComponent,
    CreateGameDialogComponent,
    ArenaChatBottomSheetComponent,
    GameplayHelpDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTooltipModule,
    ScrollingModule  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [

  ],
  entryComponents: [

  ]
 
})
export class PagesModule { }
