import { Action } from '@ngrx/store';
import { MessageActions } from './message.actions'

interface MessageAction{
  type: string,
  username: string,
  message: string
}
interface MessageState{
  username:string,
  messages:string[]
}

// CUIDADOOOO!!! No devolver el mismo state que los suscriptores no se eneran de nada!!!!
export function messageReducer(
    state: MessageState[] = [],
    action: MessageAction
  ): object[] {
    switch (action.type) {
      case MessageActions.SAVE: {
        console.log(`action received in reduce ${action.type}`);
        let storedData =state.find(messageState => messageState.username===action.username)
        if(storedData){
          console.log("Save message to user");
          storedData.messages.push(action.message);
        } else {
          console.log("First user message")
          let messageState:MessageState = {
            username:action.username,
            messages:[action.message]
          }
          state.push(messageState);
        }
        console.log(state)
        return [...state] ;
      }
      case MessageActions.CLEAR: {
        console.log('Clear messages to user '+action.username);
        state.filter(messageState => messageState.username!==action.username);
        return [...state] ;
      }
      default: {
        return state;
      }
    }
  }
