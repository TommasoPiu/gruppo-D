import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
import { Observable, Subscription, Subject } from 'rxjs';
import { StoreModule, Store, select } from '@ngrx/store';
import {filter, first, takeUntil, finalize} from 'rxjs/operators';
import { selectNote, AppState } from '../../Redux/index';
import { executeNotesAction } from '../../Redux/notes.actions';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {


/*   note: Notes[]; */
  note: Notes[];
  private takeUntilSubject: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectNote),
      filter(note => !!note && note.length > 0),
      finalize(() => console.log('Subscription chiusa')),
      takeUntil(this.takeUntilSubject)
    ).subscribe(note => {
      this.note = note;
      console.log('LE NOTE SONO ', this.note);
    });
  }

  ngOnDestroy(): void {
    this.takeUntilSubject.next();
    this.takeUntilSubject.complete();
    this.takeUntilSubject = undefined;
  }

  refreshNotes() {
    this.store.dispatch(executeNotesAction());
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
