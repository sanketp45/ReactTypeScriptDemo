import {Action} from "../actions";
import { ActionType } from "../action-types";


const startamount =0
const bankreducer=(state:number=startamount, action:Action) =>
{
 switch(action.type)
 {
   case ActionType.DEPOSIT:
       return state + action.payload
   case ActionType.WITHDRAW:
       return state - action.payload 
       case  ActionType.DEPOSITTHOUSANDS: 
       return state +action.payload
       case ActionType.BANKRUPT:
       return 0;
  
     return   
    default:
        return state
 }


}

export default bankreducer