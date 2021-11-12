import { Component } from '@angular/core';
import { CatService } from '../cat.service';

interface FileUploadTarget {
  files: FileList
}

@Component({
  selector: 'name-that-cat-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent {
  fileName?: File = undefined;

  constructor(private readonly catService: CatService) { }

  onFileSelected(target: any) {
    this.fileName = target.files[0];
  }

  addThatCat(file: File) {
    console.log('submit', file)
    this.catService.addACat(file).subscribe();
  }

}
