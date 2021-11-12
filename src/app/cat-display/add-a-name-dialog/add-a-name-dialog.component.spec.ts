import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatDisplayModule } from '../cat-display.module';

import { AddANameDialogComponent } from './add-a-name-dialog.component';

describe('AddANameDialogComponent', () => {
  let component: AddANameDialogComponent;
  let fixture: ComponentFixture<AddANameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CatDisplayModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddANameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
