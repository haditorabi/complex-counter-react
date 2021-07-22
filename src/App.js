import React, {useState, useEffect} from "react";
import Counter from "./component/Counter";
import TotalCounters from "./component/TotalCounters";

const App = () =>  {
const initialCounters = [{ id: 1, value: 1},{ id: 2, value: 1}];
const [counters, setCounters] = useState(initialCounters);
function handleDecrease(counter) {
  // console.log(counters);
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

function totalCounters(counters) {
  console.log(counters);
  return counters.reduce((sum, i) => {
    return sum + i;
  }, 0);
}

useEffect(() => {
  console.log(counters.length);
  setTotal(totalCounters);
  // eslint-disable-next-line array-callback-return
});
  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="row">
        <div className="d-flex flex-column col-md-3">
        {counters.map((i) => 
          <Counter key={Math.random()} value={i} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
        )}
        <TotalCounters total={total}/>
        </div>
      </div>
    </div>
  );
};
export default App;
