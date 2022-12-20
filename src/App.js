import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { dec, editText, inc } from './redux/action';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("")
  const {counter,text} = useSelector(state=>state)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h3>
      counter : {counter}
     </h3>
     <button onClick={()=>dispatch(inc())}  >+</button>
     <button onClick={()=>dispatch(dec())}  >-</button>

     <h4> {text} </h4>
     <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)} />
     <button  onClick={()=>dispatch(editText(value))} >change text</button>
    </div>
  );
}

export default App;
