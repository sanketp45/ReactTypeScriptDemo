import { Action } from "../actions";
import { ActionType } from "../action-types";
import { Dispatch } from "react";

export const depositmoney=(amount:number) =>
{
 return(dispatch:Dispatch<Action>) =>{
  
    console.log("inside deposit money",amount)
  
    dispatch({
        type:ActionType.DEPOSIT,
        payload:amount

     })
 }

}

export const withdrawmoney=(amount:number) =>
{
 return(dispatch:Dispatch<Action>) =>{

     dispatch({
        type:ActionType.WITHDRAW,
        payload:amount

     })
 }

}
export const bankrupt=() =>
{
 return(dispatch:Dispatch<Action>) =>{

     dispatch({
        type:ActionType.BANKRUPT,
        

     })
 }

}
export const depositThousands=(amount:number) =>
{
 return(dispatch:Dispatch<Action>) =>{

     dispatch({
        type:ActionType.DEPOSITTHOUSANDS,
        payload:amount
        

     })
 }

}