import { createSelector } from '@ngrx/store';
import { Notes } from '../models/notes';

export interface FeatureState {
  nota: {
    flagNotes: boolean,
    inputNota: Notes[]
  };
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = (state: AppState) => state.feature;
export const selectFeatureState = createSelector(
  selectFeature,
  (state: FeatureState) => state.nota
);
