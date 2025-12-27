import {useState} from 'react';
import './App.css';
import MyButton from './MyButton.jsx';


function App() {
  const [count, setCount] = useState([3,10])

  function double(index){
    const newCounts = [...count];
    newCounts[index] = newCounts[index] * 2;
    setCount(newCounts);
  }

  function addOne(index){
    const newCounts = [...count];
    newCounts[index] = newCounts[index] + 1;
    setCount(newCounts);
  }

  return (
    <div className="app">
      <MyButton className="button1" count={count[0]} onClick={() => double(0)} />
      <MyButton className="button2" count={count[1]} onClick={() => addOne(1)} />
    </div>
    
  )
}

export default App;