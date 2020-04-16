import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { NotesService } from '../services/notes.service';
import {executeNotesAction, storeNotesAction} from './notes.actions';

@Injectable()
export class NotesEffects {

  loadNotes$ = createEffect(() => this.actions$.pipe(
    ofType(executeNotesAction),
    mergeMap(() => this.notesService.getNotes()
      .pipe(
        tap(notes => console.log('EFFECTS' + notes) ),
        map(notes => storeNotesAction({payload: notes})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) {}
}
