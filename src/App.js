import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const arr = [];

    const [counterList, setCounterList] = useState(arr);

    const addCounter = () => {
        const updatedCounterList = [...counterList];
        updatedCounterList.push(<Counter/>);
        setCounterList(updatedCounterList);
    }

    const deleteCounter = () => {
        const updatedCounterList = [...counterList];
        updatedCounterList.pop();
        setCounterList(updatedCounterList);
    }

    return (
        <div className="App">


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button className="btn btn-outline-info btn-sm" onClick={addCounter}>Add Counter</button>
                        <button className="btn btn-outline-secondary btn-sm" onClick={deleteCounter}>Delete Counter
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        {counterList.map((el, index) => <li key={index}>{el}
                        </li>)}
                    </div>
                </div>

            </div>


        </div>
    );
}

export default App;
