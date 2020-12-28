import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import wifiIcon from '@iconify-icons/bi/wifi';


function Card() {
    return (
        <div style={{ height: "85%" }} className="from-red-900 px-4 py-5 text-white bg-gradient-to-tr to-gray-800 flex flex-col justify-between rounded-2xl w-full">
            <div>
                <div className="flex flex-row  mb-3">
                    <figure><img src="./chip.png" width="20" /></figure>
                    <figure><InlineIcon rotate="90deg" icon={wifiIcon} /></figure>
                </div>
                <span className="text-xs font-semibold font-mono">4562  1122  4595 7852</span>
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-col self-end">
                    <small style={{fontSize:"6px"}} className="text-xs text-white">CARD HOLDER</small>
                    <p style={{fontSize:"10px"}} className="text-xs font-bold text-white">Elvis Agbesi</p>
                </div>

                <div className="flex flex-col">
                    <figure>
                        <img width="50" src="./mastercard.png" />
                    </figure>
                    <p  style={{fontSize:"10px"}} className="font-semibold">Mastercard</p>
                </div>
            </div>
        </div>
    )
}

export default Card;