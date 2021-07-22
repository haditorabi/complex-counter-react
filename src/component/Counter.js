import React, {useEffect} from "react";
export default function Counter({handleDecrease, handleIncrease, value}) {
    console.log(value);
    // useEffect(() => {

    //     // eslint-disable-next-line array-callback-return
    //   }, [value.value]);
// const [counter, setCounter] = useState(value);
// function increaseCounter() {
//     setCounter();
// }
    return (
        <div className="btn-group mb-1 border border-info" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={() => handleDecrease(value)} disabled={(value.value) < 1 ? " =true" : ""}><strong>-</strong></button>
            <div className="btn btn-default col-8">{value.value}</div>
            <button type="button" className="btn btn-success" onClick={() => handleIncrease(value)}><strong>+</strong></button>
        </div>
    )
}