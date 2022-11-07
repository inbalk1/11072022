import { useState } from "react";
import './App.css';
import Counter from "./components/counter";
import CounterForm from "./components/counterForm";
import CounterList from "./components/counterList";

function App() {
  const [counters, setCounters] = useState([]);

  return (
    <div className="App">
      <CounterForm
        onSubmit={(counter) =>
          setCounters((counters) => [...counters, counter])
        }
      />
      <br />
      <CounterList counters={counters} />
    </div>
  );
}

export default App;
