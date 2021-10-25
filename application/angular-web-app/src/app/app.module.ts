import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellService } from './services/shell.service';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileDialogComponent } from './components/profile-dialog/profile-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DonateDialogComponent } from './components/donate-dialog/donate-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SyncNotConnectedDialogComponent } from './components/sync-not-detected-dialog/sync-not-detected-dialog.component';
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackDialogComponent,
    ProfileDialogComponent,
    DonateDialogComponent,
    SyncNotConnectedDialogComponent,
    WelcomeComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,

    MatTooltipModule,
    ScrollingModule
  ],
  providers: [
    ShellService,
    { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
