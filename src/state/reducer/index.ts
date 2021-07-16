import { combineReducers } from "redux";
import bankreducer from "./bankreducer";

const reducer= combineReducers({
    bank:bankreducer
})



export type RootStates=ReturnType<typeof reducer>

export default reducer