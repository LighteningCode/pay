import { InlineIcon } from '@iconify/react'
import React from 'react'


function Payment (props) {
    return (
        <div className="bg-gray-100 rounded-2xl flex flex-col px-4 py-4 mx-1 h-full">
            <span className="bg-black rounded-2xl self-center p-3 text-white text-xl mb-3">
                <InlineIcon icon={props.icon} />
            </span>
            <h5 className="text-xs font-bold text-center mb-0.5">{props.payment}</h5>
            <p style={{fontSize:"8px"}} className="text-xs text-center text-gray-400 font-semibold mb-0.5">{props.description}</p>
            <p style={{fontSize:"10px"}} className="text-center font-bold">{props.amount}</p>
        </div>
    )
}

export default Payment;