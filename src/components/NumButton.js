import React from 'react'

export const NumButton = (props) => {
    return (
        <div className="numButton" onClick={props.oGetValue}>
            <button className="darkColor" value="clear">AC</button>
            <button className="darkColor" value="-">+/-</button>
            <button className="darkColor" value="%">%</button>
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
            <button className="widthMore" value="0">0</button>
            <button value=".">.</button>
        </div>
    )
}
