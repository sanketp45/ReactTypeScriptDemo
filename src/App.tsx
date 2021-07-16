import React, { MouseEventHandler, useState } from 'react';
import logo from './logo.svg';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import { actionCreator } from './state';
import Button from './Button';
import './App.css';
import {UseAction} from "./UseAction";
import { ActionType } from './state/action-types';
import {useTypedSelector} from "./UsedTypedSelector";
import styled from 'styled-components';



function App() {

    


  const dispatch=useDispatch()
  const [amount,setAmount]=useState<number>(0)
  const {depositmoney,withdrawmoney,bankrupt,depositThousands} = bindActionCreators(actionCreator,dispatch)
 
  const  state  = useTypedSelector(
    (state) => state.bank
  );
  const [selectValue, setSelectValue] = useState<string>(
   
);
  console.log("state",state)
  const handleDeposit=(event:React.MouseEventHandler<HTMLButtonElement>):void =>
  {
        depositmoney(amount)

  }

  const Title=styled.h1`
    font-size: 30px;
    font-family: sans-serif;
    font-weight:lighter;
    text-align: center;
color:black;
   

  
  `
  const Select = styled.select `
    margin:'10px';
    padding:'200px';
    font-size: x-large;
    
  
  `
const Container=styled.div  ` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

` 
const StyledButton =styled.button `
   font-size: 1em;
   align-self: center;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;


`

  return (
 
    <Container className="App">
     
     <Title>Bank Manager</Title>
     <Select onChange={ event =>{
             setSelectValue(event.target.value)
     }}
           
      >
            <option>Rohit</option>
            <option>Virat</option>
            <option>Rahul</option>
        </Select>
      <h4>selected value{ selectValue}</h4>
     <input type="number" 
      onChange={(event:React.ChangeEvent<HTMLInputElement>):void =>
    {  setAmount(parseInt(event.target.value,10))}
      } 
    />
      <h4>Selected Value {selectValue}</h4> 
     <h4>Current Balance {state}</h4>
     
     <StyledButton onClick ={() => depositmoney(amount)}
      >Deposit</StyledButton> 
     <StyledButton onClick ={() => withdrawmoney(400)} >withdraw</StyledButton>
     <StyledButton onClick ={() => bankrupt()}>bankrupt</StyledButton>  
     <StyledButton onClick={()=>depositThousands(1000)}>Deposit in thousands only </StyledButton> 
     </Container>
   
  );
}

export default App;
