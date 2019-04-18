import { Action } from '@ngrx/store';
import { MessageActions } from './message.actions'

interface MessageAction{
  type: string,
  data: string,
  userId: string
}

// CUIDADOOOO!!! No devolver el mismo state que los suscriptores no se eneran de nada!!!!
export function messageReducer(
    state: object[] = [],
    action: MessageAction
  ): object[] {
    switch (action.type) {
      case MessageActions.SAVE: {
        console.log(`action received in reduce ${action.type}`);
        let userFound=false;
        state.forEach(user => {
          if(user['id']===action.userId){
            user['messages'].push(action.data);
            userFound=true;
            console.log("Save message to user")
          }
        })
        if(!userFound){
          console.log("First user message")
          let user = {
            id:action.userId,
            messages:[]
          }
          user['messages'].push(action.data);
          state.push(user);
        }
        console.log(`state ${state}`);
        return [...state] ;
      }
      case MessageActions.CLEAR: {
        console.log('Clear messages to user '+action.userId)
        state.filter(user => (user['id']!==action.userId))
        return [...state] ;
      }
      default: {
        return state;
      }
    }
  }
