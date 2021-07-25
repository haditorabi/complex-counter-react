import React, {useState, useEffect} from "react";
import Counters from "./component/Counters";
import Counter from "./component/Counter";
import TotalCounters from "./component/TotalCounters";

const App = () =>  {
const initialCounters = [{ id: 1, value: 1},{ id: 2, value: 1}, [{ id: 3, value: 2},{ id: 4, value: 2}]];
const [counters, setCounters] = useState(initialCounters);

function handleDecrease(counter) {
  const countersState = [...counters];
  const index = countersState.indexOf(counter);
  counters[index] = { ...counters[index] };
  counters[index].value = counters[index].value -1;
  setCounters([...counters ]);
};
function handleIncrease(counter) {
  const countersState = [...counters];
  const index = countersState.indexOf(counter);
  counters[index] = { ...counters[index] };
  counters[index].value = counters[index].value +1;
  setCounters([ ...counters ]);
};

const [total, setTotal] = useState(0);
useEffect(() => {
  function totalCounters () {
    return counters.reduce((sum, i) => {
      return sum + i.value;
    }, 0);
  }
  setTotal(totalCounters);
  // eslint-disable-next-line array-callback-return
},[counters]);
return (
  <div className="container">
      <h1>Counters</h1>
      <div className="row">
        <div className="d-flex flex-column w-100">
        {counters.map((i) => {
          if(Array.isArray(i)) {
            return <Counters counters={i} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
          } else {
            return <Counter key={i.id.toString()} value={i} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
          }
        })}
        <TotalCounters key={Math.random()} total={total}/>
        </div>
      </div>
    </div>
  );
};
export default App;
