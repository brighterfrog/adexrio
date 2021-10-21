import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { MiniCardComponent } from '../components/mini-card/mini-card.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent, MiniCardComponent],
  exports: [
    CardComponent,
    MiniCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LayoutModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
