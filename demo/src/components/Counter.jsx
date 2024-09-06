import { useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);
    return(
        <>
        <h2> State counter example</h2>
        <p> The state counter is {count}</p>
        <button onClick={()=> setCount(val=> val+1)} className="btn btn-success"> ++ </button>
        <button onClick={()=> setCount(val=> val-1)} className="btn btn-danger"> -- </button>
        <button onClick={()=> setCount(0)} className="btn btn-primary"> Reset </button>
        </>
    )
}
export default Counter;