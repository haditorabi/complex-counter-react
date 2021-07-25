import React, {useState, useEffect} from "react";
import Counter from "./Counter";
import TotalCounters from "./TotalCounters";

const Counters = ({counters, handleIncrease, handleDecrease}) =>  {
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
        <div className="row">
            <div className="d-flex flex-column w-75 ">
                {counters.map((i) => {
                    if(Array.isArray(i)) {
                    return "" //<Counters /> 
                    } else {
                    return <Counter key={i.id.toString()} value={i} handleDecrease={handleDecrease} handleIncrease={handleIncrease}/>
                    }
                })}
                <TotalCounters key={Math.random().toString()} total={total}/>
            </div>
        </div>
    )
}
export default Counters;