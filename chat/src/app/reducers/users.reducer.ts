import { State } from './index';
import { Action } from '@ngrx/store';
import { UserActions } from './users.actions';

interface UserAction {
    type: string;
    users: object[];
}

export function usersReducer(
    state: string[] = [],
    action: UserAction
  ): object[] {
    switch (action.type) {
      case UserActions.FETCH_USERS: {
        return [...action.users] ;
      }
      case UserActions.CLEAN_USERS: {
        
        return [] ;
      }
      default: {
        return [];
      }
    }
  }
