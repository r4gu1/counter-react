import React,{useState} from 'react';

function Counter(){
    var[mynumber,setmynumber]=useState(0)

    function inc(){
            setmynumber(mynumber+1);
    }
    function dec(){
        setmynumber(mynumber-1);
    }
    return(<div>
        <div class="container">
        <h1>Counter App</h1>
        <div> 
            <button class="button" onClick={inc}>+</button>
            <button class="button" onClick={dec}>-</button>
            <h1 class="result">Result:{mynumber}</h1>
        </div>
        </div>
    </div>)
}
export default Counter