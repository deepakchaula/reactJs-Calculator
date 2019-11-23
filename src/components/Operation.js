import React from 'react'

export const Operation = (props) => {
    return (
        <div className="opLayout" onClick={props.oGetOperation}>
            <button value="/">÷</button>
            <button value="*">×</button>
            <button value="-">-</button>
            <button value="+">+</button>
            <button value="=">=</button>
        </div>
    )
}