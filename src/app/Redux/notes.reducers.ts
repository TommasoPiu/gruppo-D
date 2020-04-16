import { createReducer, on } from '@ngrx/store';
import { Notes } from 'src/app/models/notes';
import { storeNotesAction } from './notes.actions';

export interface NoteState {
  notes: Notes[];
}

export const initialState: NoteState = { notes: []};

// tslint:disable-next-line: variable-name
const _NotesReducer = createReducer(initialState,
  on(storeNotesAction, (state, {payload}) => {
      console.log('Reducer: ' + payload);
      return {...state, notes: payload};
    }
  )
  );



export function notesReducer(state, action) {
    return _NotesReducer(state, action);
  }
