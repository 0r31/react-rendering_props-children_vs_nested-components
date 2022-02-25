import { useEffect, useState } from 'react';

function Title1() {
  return <h1>Clock1</h1>;
}

function Clock1(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(
      () => setDate(new Date()),
      1000
    );
    return () => {
      clearInterval(timerID);
    }
  }, [])

  return (
    <div>
      <Title1/>
      <h2>Il est {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function Title2() {
  return <h1>Clock2</h1>;
}

function Clock2(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(
      () => setDate(new Date()),
      1000
    );
    return () => {
      clearInterval(timerID);
    }
  }, [])

  return (
    <div>
      {props.children}
      <h2>Il est {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Clock1/>
      <hr/>
      <Clock2>
        <Title2/>
      </Clock2>
    </div>
  );
}

export default App;
