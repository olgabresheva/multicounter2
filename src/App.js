import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const deletBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>);

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
                        <button className="btn btn-outline-secondary btn-sm" onClick={deleteCounter}>Delete Counter</button>
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
