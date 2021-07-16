interface DepositAction {
    type:"deposit", 
    payload:number

}

interface WithdrawtAction {
    type:"withdraw", 
    payload:number

}
interface BankruptAction {
    type:"bankrupt", 
    

}
interface DepositThousands {
 type:"depositThousands",
 payload:number

}
 export type Action = DepositAction | WithdrawtAction  | BankruptAction | DepositThousands
