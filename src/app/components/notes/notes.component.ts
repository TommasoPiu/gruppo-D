import { Component, OnInit, Input } from '@angular/core';
import {MatFormFieldModule, MatFormFieldAppearance} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NotesService } from 'src/app/services/notes.service';
import { Notes } from 'src/app/models/notes';
import { ThemePalette } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { StoreModule, Store, select } from '@ngrx/store';
import { notesAction } from 'src/app/Redux/notes.actions';
import { selectFeatureState } from 'src/app/Redux';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {


/*   note: Notes[]; */
  note: Notes[];


  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: notesAction.type });
    // tslint:disable-next-line: deprecation
    this.store.pipe(select(selectFeatureState)).subscribe(note => this.note = note.inputNota);
    console.log('LE NOTE SONO ', this.note);
  }

  // getNotes(): void{
  //   this.noteService.getNotes().subscribe(note => {
  //     note.sort((a, b) => {
  //         return a < b ? -1 : 1;
  //      });
  //     this.note = note;
  //  });
  // }
}
