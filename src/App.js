import React, {useState} from "react";
import Counter from "./component/Counter";
import TotalCounters from "./component/TotalCounters";

const App = () =>  {
  const initialCounters = {
    counters: [
    {id:1, value:9},
    {id:2, value:2},
    {id:3, value:3},
    {id:4, value:4}
    ]
  };
  // const initialCounters = [0, 1];  
  const [counters, setCounters] = useState(initialCounters);
  // Total functions
  // function getSum(total, num) {
  //     return total + Math.round(num.value);
  // }

  // const [total, setTotal] = useState(0)

  // useEffect( () => {
  // function getTotal() {
  //     return state.counter.reduce(getSum, 0)
  // }
  //   setTotal(getTotal())
  // }, [state.counter]);
  // end of total functions

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="row">
        <div className="d-flex flex-column col-md-3">
        {counters.counters.map((obj) => 
        <Counter key={obj.id} props={obj} stateManger={setCounters}/>
        )}
        <TotalCounters total={10}/>
        </div>
      </div>
    </div>
  );
};
export default App;
