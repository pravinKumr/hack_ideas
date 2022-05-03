import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackIdeasRoutingModule } from './hack-ideas-routing.module';
import { HackIdeasComponent } from './hack-ideas.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { HeaderComponent } from './header/header.component';
import { PipesModule } from '../global-component/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HackIdeasComponent,
    ChallengesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HackIdeasRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HackIdeasModule { }
