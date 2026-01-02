import { useRef, useState } from 'react';

function App() {
  const [currentcount, setCurrentCount] = useState(1);
  const  timer = useRef();

  function startClock(){
    let value = setInterval(function(){
      setCurrentCount(c => c+1);
    },1000)
    timer.current = value;
  }
  
  function stopClock(){
    clearInterval(timer.current);
  }

  return <div>
    {currentcount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}
export default App