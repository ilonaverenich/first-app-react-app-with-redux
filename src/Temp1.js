import React from 'react';
import { setText } from './redux/actions/textAction';
import {useDispatch, useSelector} from 'react-redux'

function Temp1() {

  const dispatch = useDispatch();
  const text = useSelector((store)=>store.text)
  const text2 = useSelector((store)=>store.text)

  return (
    <div>
      <input value={text} onChange={(e)=>dispatch(setText(e.target.value))}/>
      <h1>{text2}</h1>
    </div>
  )
}

export default Temp1