import { createSelector } from '@ngrx/store';
import {NoteState} from './notes.reducers';

export interface AppState {
  nota: NoteState;
}

export const selectFeature = (state: AppState) => state.nota;
export const selectNote = createSelector(
  selectFeature,
  (state: NoteState) => state.notes
);
