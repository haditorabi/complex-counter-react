import React, { useState, useEffect } from "react";
export default function Counter({counters, setCounters, obj}) {
    // console.log(obj);
    const [counter, setCounter] = useState(obj.value);
    function increaseVal() {
        setCounter(counter+1);
    }
    function decreaseVal() {
        setCounter(counter-1)
    }
    useEffect(() => {
        setCounters(...counters, );
//eslint-disable-next-line
},[counter]);
    return (
        <div className="btn-group mb-1 border border-info" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={() => decreaseVal()} disabled={(counter) < 1 ? " =true" : ""}><strong>-</strong></button>
            <div className="btn btn-default col-8">{counter}</div>
            <button type="button" className="btn btn-success" onClick={() => increaseVal()}><strong>+</strong></button>
        </div>
    )
}