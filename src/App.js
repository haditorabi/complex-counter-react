import React, {useState} from "react";
import Counter from "./component/Counter";
import TotalCounters from "./component/TotalCounters";

const App = () =>  {
  const initialCounters = ;
const [counters, setCounters] = useState(initialCounters);
// const [total, setTotal] = useState(0)
// const totalCounters = counters.counters.reduce((total, item) => {
//   return total+item.value
// },0); 
// useEffect(() => {
  console.log(counters.length);
//   console.log(totalCounters);
//   setTotal(totalCounters);
//   // eslint-disable-next-line array-callback-return
// });
  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="row">
        <div className="d-flex flex-column col-md-3">
        {Object.keys(counters).map((obj) => 
        <Counter key={Math.random()} obj={obj} setCounters={setCounters} counters={counters}/>
        )}
        <TotalCounters total={0}/>
        </div>
      </div>
    </div>
  );
};
export default App;
