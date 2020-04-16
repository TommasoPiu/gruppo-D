import { createSelector } from '@ngrx/store';
import {NoteState} from './notes.reducers';

export interface AppState {
  notes: NoteState;
}

export const selectFeature = (state: AppState) => state.notes;
export const selectNote = createSelector(
  selectFeature,
  (state: NoteState) => state.notes
);
