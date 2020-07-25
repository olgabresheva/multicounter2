import React, {useState} from 'react';
import './App.css';
import CountBtn from "./CountBtn";
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter() {

    const resetBtn = (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-counterclockwise" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"/>
            <path fillRule="evenodd"
                  d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"/>
        </svg>);

    const [count, setCount] = useState(0);

    const changeCount = (n) => {
        setCount(count + n);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <span>
            <CountBtn value={'-1'} count={count} changeCount={changeCount}/>
            <CountBtn value={'-2'} count={count} changeCount={changeCount}/>
            <CountBtn value={'-3'} count={count} changeCount={changeCount}/>
            <span className="count">{count}</span>
            <CountBtn value={'+3'} count={count} changeCount={changeCount}/>
            <CountBtn value={'+2'} count={count} changeCount={changeCount}/>
            <CountBtn value={'+1'} count={count} changeCount={changeCount}/>
            <button className="btn btn-outline-info btn-sm" onClick={reset}>{resetBtn}</button>
        </span>
    );
}

export default Counter;
