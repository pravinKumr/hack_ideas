import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { HackIdeasComponent } from './hack-ideas.component';

const routes: Routes = [
  {
    path: '', component: HackIdeasComponent, children: [
      { path: '', redirectTo: 'challenges' },
      { path: 'challenges', component: ChallengesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackIdeasRoutingModule { }
