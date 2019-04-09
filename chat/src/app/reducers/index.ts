import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { messageReducer } from './message.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  messages: messageReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
