import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { NotesService } from '../services/notes.service';
import { notesAction, getNotesAction } from './notes.actions';

@Injectable()
export class NotesEffects {

  loadNotes$ = createEffect(() => this.actions$.pipe(
    ofType(notesAction),
    mergeMap(() => this.notesService.getNotes()
      .pipe(
        tap(notes => console.log('EFFECTS' + notes) ),
        map(notes => getNotesAction({inputN: notes})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) {}
}