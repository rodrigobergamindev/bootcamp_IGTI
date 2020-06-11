import React, {useState} from 'react';
import { getNewTimeStamp } from './helpers/newDateStamp';

function App() {

const [clickArray, setClickArray] = useState([]);



const handleClick = () => {
  const newClickArray = Object.assign([], clickArray)
  newClickArray.push(getNewTimeStamp())

  setClickArray(newClickArray)
}


  return (
    <div>

      <h1>
        React com <em>Hooks</em>
      </h1>

    <button onClick={handleClick}>Clique aqui</button>

    <ul>
      {clickArray.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul>
    </div>
  )
}

export default App;
