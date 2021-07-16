import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'
import { actionCreator } from './state';


export const UseAction=()=>
{
  const dispatch=useDispatch()
  return 
 const{depositmoney,withdrawmoney,bankrupt} = bindActionCreators(actionCreator,dispatch)

}