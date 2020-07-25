import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function CountBtn(props) {

    const sendValue = () => {
        props.changeCount(props.value);
    }

    return (
        <span>
    <button className="btn btn-outline-secondary btn-sm" onClick={sendValue}>{props.value}</button>
        </span>

    );
}

export default CountBtn;
