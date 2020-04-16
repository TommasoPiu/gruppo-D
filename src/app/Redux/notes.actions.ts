import { createAction, props } from '@ngrx/store';
import { Notes } from '../models/notes';

export enum NotesActionEnum {
  EXECUTE_NOTES_ACTION = '[Notes API] execute notes call',
  STORE_NOTES_ACTION = '[Notes API] store notes'
}

export const executeNotesAction = createAction(NotesActionEnum.EXECUTE_NOTES_ACTION);
export const storeNotesAction = createAction(NotesActionEnum.STORE_NOTES_ACTION, props<{payload: Notes[]}>());
