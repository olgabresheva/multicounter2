import React, {useState} from 'react';
import './App.css';
import CountBtn from "./CountBtn";
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter() {

    const [count, setCount] = useState(0);

    const changeCount = (n) => {
        setCount(count + n);
    }

    return (
        <span>
            <CountBtn value={- 1} count={count} changeCount={changeCount}/>
            <CountBtn value={- 2} count={count} changeCount={changeCount}/>
            <CountBtn value={- 3} count={count} changeCount={changeCount}/>
            <span className={count}>{count}</span>
            <CountBtn value={+ 3} count={count} changeCount={changeCount}/>
            <CountBtn value={+ 2} count={count} changeCount={changeCount}/>
            <CountBtn value={+ 1} count={count} changeCount={changeCount}/>
        </span>

    );
}

export default Counter;
