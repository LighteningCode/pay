import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import wifiIcon from '@iconify-icons/bi/wifi';


function Card() {
    return (
        <div style={{ height: "95%" }} className="from-gray-700 px-4 py-5 text-white bg-gradient-to-tr to-gray-800 flex flex-col justify-between rounded-3xl w-full">
            <div>
                <div className="flex flex-row mb-3">
                    <figure><img className="self-center" src="./chip.png" width="40" /></figure>
                    <figure className="text-3xl"><InlineIcon rotate="90deg" icon={wifiIcon} /></figure>
                </div>
                <span className="text-2xl font-medium font-mono">4562  1122  4595 7852</span>
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-col self-end">
                    <small style={{fontSize:"10px"}} className="text-xs text-white mb-3">CARD HOLDER</small>
                    <p style={{fontSize:"18px"}} className="text-xs font-bold text-white">Elvis Agbesi</p>
                </div>

                <div className="flex flex-col">
                    <figure className="mb-3 self-end">
                        <img width="50" src="./mastercard.png" />
                    </figure>
                    <p  style={{fontSize:"10px"}} className="font-semibold">Mastercard</p>
                </div>
            </div>
        </div>
    )
}

export default Card;