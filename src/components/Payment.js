import { InlineIcon } from '@iconify/react'
import React from 'react'


function Payment (props) {
    return (
        <div style={{height:"83.3%"}} className="bg-gray-100 rounded-3xl justify-center flex flex-col px-4 pt-6 pb-6 mx-3 transition-all duration-500 w-full border-2 hover:border-black">
            <span className="bg-black rounded-2xl self-center p-3 text-white text-3xl mb-4">
                <InlineIcon icon={props.icon} />
            </span>
            <h5 className="text-lg font-bold text-center mb-0.5">{props.payment}</h5>
            <p style={{fontSize:"12px"}} className="text-sm text-center text-gray-400 font-semibold mb-0.5">{props.description}</p>
            <p style={{fontSize:"15px"}} className="text-center font-bold">{props.amount}</p>
        </div>
    )
}

export default Payment;