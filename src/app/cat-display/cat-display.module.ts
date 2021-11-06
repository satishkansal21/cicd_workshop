import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { IsVotingOpenPipe } from './pipes/is-voting-open.pipe';
import { NameWinnerPipe } from './pipes/name-winner.pipe';
import { RemainingVotesPipe } from './pipes/remaining-votes.pipe';
import { CatDisplayComponent } from './cat-display.component';
import { AddANameDialogComponent, CatNameDialogComponent } from './add-a-name-dialog/add-a-name-dialog.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CatDisplayComponent,
    AddANameDialogComponent,
    CatNameDialogComponent,
    IsVotingOpenPipe,
    NameWinnerPipe,
    RemainingVotesPipe,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
  exports: [
    CatDisplayComponent,
    AddANameDialogComponent,
    CatNameDialogComponent,
    IsVotingOpenPipe,
    NameWinnerPipe,
    RemainingVotesPipe,
  ]
})
export class CatDisplayModule { }
