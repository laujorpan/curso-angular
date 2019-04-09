import { State } from './index';
import { Action } from '@ngrx/store';

// CUIDADOOOO!!! No devolver el mismo state que los suscriptores no se eneran de nada!!!!
export function messageReducer(
    state: string[] = [],
    action: Action
  ): string[] {
    switch (action.type) {
      case 'hello': {
        console.log(`action received in reduce ${action.type}`);
        state.push('hi');
        console.log(`state ${state}`);
        return [...state] ;
      }
      case 'bye': {
        state.push('bye');
        return [...state] ;
      }
      default: {
        return state;
      }
    }
  }
