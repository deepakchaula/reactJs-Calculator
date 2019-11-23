import React from 'react'

export const InputDisplay = (props) => {
    return (
        <div className="rightFloat">
            <input onChange={props.oGetInput} placeholder="0" readOnly />
        </div>
    )
}
