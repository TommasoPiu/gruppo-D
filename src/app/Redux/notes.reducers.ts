import { createReducer, on } from '@ngrx/store';
import { notesAction, getNotesAction} from './notes.actions';
import { state } from '@angular/animations';
import { Notes } from 'src/app/models/notes';

export const initialState = { flagNotes: false, inputNotes: []};

// tslint:disable-next-line: variable-name
const _NotesReducer = createReducer(initialState,

    on(getNotesAction, (state, {inputN}) => ({ ...state, inputNotes: inputN }))
  );



export function notesReducer(state, action) {
    return _NotesReducer(state, action);
  }


