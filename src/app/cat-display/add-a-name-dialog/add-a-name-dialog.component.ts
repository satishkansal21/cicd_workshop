import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CatService } from '../../cat.service';
import { Cat } from '../../models/cat';
import { NameWithVote } from 'src/app/models/name-with-vote';

export interface DialogData {
  cat: Cat;
  name: string;
}

@Component({
  selector: 'name-that-cat-add-name-dialog',
  templateUrl: 'add-a-name-dialog.component.html',
})
export class AddANameDialogComponent {
  @Input() currentCat!: Cat;
  name: string = '';

  constructor(
    public dialog: MatDialog,
    private readonly catService: CatService,
  ) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(CatNameDialogComponent, {
      width: '300px',
      data: {cat: this.currentCat, name: this.name}
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if(result) {
        const updatedCat = {
          ...this.currentCat,
          names: [
            ...this.currentCat.names,
            new NameWithVote(result, this.currentCat.id)
          ]
        };
  
        this.catService.updateCurrentCat(updatedCat);
      }
    });
  }
}

@Component({
  templateUrl: 'cat-name-dialog.html',
})
export class CatNameDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CatNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}