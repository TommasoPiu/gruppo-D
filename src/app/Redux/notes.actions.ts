import { createAction, props } from '@ngrx/store';
import { Notes } from '../models/notes';

export const notesAction = createAction('[Notes] get notes');

export const getNotesAction = createAction('[Notes API] Notes Loaded Success' , props<{inputN: Notes[]}>());

