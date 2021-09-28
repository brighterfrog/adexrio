import { NgModule } from '@angular/core';
import { RollitComponent } from './games/rollit/rollit.component';
import { DashboardComponent } from './games/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { MatGridTile } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CreateGameDialogComponent } from './games/rollit/components/create-game-dialog/create-game-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ArenaChatBottomSheetComponent } from './games/rollit/components/arena-chat/arena-chat-bottomsheet.component';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'rollit',
    component: RollitComponent
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
    ArenaChatBottomSheetComponent
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
    MatTooltipModule
  ],
  exports: [

  ],
  entryComponents: [

  ]
})
export class PagesModule { }
