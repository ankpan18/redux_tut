import React from 'react'
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';

function App() {
  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <>
    <div className="container">

    <h1>Increment / Decrement Counter</h1>
    <h4>using Redux Functionality</h4>

    <div className="quant">
      <a className="quant_minus" title="Decrement"
      onClick={()=>dispatch(decNumber(2))}><span> - </span></a>
      <input name="quant" type="text" className="quant_input" value={myState} readOnly={true}/>
      <a className='quant_plus' title='Increment'
      onClick={()=>dispatch(incNumber(4))}><span> + </span></a>

    </div>
    </div>
    </>
  )
} 

export default App