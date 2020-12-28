import React from 'react'
import Card from './Card'
import Payment from './Payment'
import briefcaseIcon from '@iconify-icons/bi/briefcase';
import paypalIcon from '@iconify/icons-simple-icons/paypal';
import sortAlphaDown from '@iconify-icons/bi/sort-alpha-down';
import giftIcon from '@iconify-icons/bi/gift';
import threeDotsVertical from '@iconify-icons/bi/three-dots-vertical';
import outlineLocalLaundryService from '@iconify-icons/ic/outline-local-laundry-service';
import outlineFastfood from '@iconify-icons/ic/outline-fastfood';
import outlineDirectionsCar from '@iconify-icons/ic/outline-directions-car';
import gymIcon from '@iconify-icons/gg/gym';


import { InlineIcon } from '@iconify/react';



function Dashboard() {


    const recentTrans = [
        {
            id: 53,
            icon: giftIcon,
            title: "Shopping",
            date: "05 Jun 2020 10:10",
            amount: "$300",
        },
        {
            id: 573,
            icon: outlineFastfood,
            title: "Grocery",
            date: "12 Jun 2019 12:46",
            amount: "$45",
        },
        {
            id: 53,
            icon: gymIcon,
            title: "Gym",
            date: "23 Jun 2019 09:23",
            amount: "$125",
        },
        {
            id: 53,
            icon: outlineLocalLaundryService,
            title: "Laundry",
            date: "27 Jun 2019 06:10",
            amount: "$60",
        },
        {
            id: 53,
            icon: outlineDirectionsCar,
            title: "Car repair",
            date: "28 Jun 2019 10:23",
            amount: "$300",
        },
    ]

    return (
        <div className="flex flex-row">
            <div className="w-8/12 flex flex-col">

                <div className="flex flex-row">
                    <div className="w-1/2 mr-2 flex flex-col">
                        <p className="mb-2 font-bold">Dashboard</p>
                        <Card />
                    </div>
                    <div className="w-1/2">
                        <p className="mb-2 font-bold">Upcoming payments</p>

                        <div className="flex flex-row justify-around">
                            <Payment icon={briefcaseIcon} payment="Salary" description="Belong Interactive" amount="+$2000" />
                            <Payment icon={paypalIcon} payment="Paypal" description="Freelance payment" amount="+$4800" />
                        </div>
                    </div>
                </div>

                <div>
                    <nav className="flex flex-row mt-7">
                        <p className="mr-auto font-bold">Recent transaction</p>
                        <span className="flex flex-row">
                            <select className="text-xs text-gray-400 border rounded-md w-24 p-0.5 border-gray-200 mr-2">
                                <option>Sort by</option>
                            </select>
                            <div className="self-center">
                                <InlineIcon icon={sortAlphaDown} />
                            </div>
                        </span>
                    </nav>

                    <table className="w-full mt-4 flex flex-col">
                        {
                            recentTrans.map((value, idx) =>
                                <div key={idx} className={`text-xs pb-4 mb-4 flex flex-row justify-between ${(idx !== recentTrans.length-1) ? 'border-b' : ''} border-gray-300`}>
                                    <td className="text-base w-1/12"><InlineIcon icon={value.icon} /></td>
                                    <td className="font-bold w-4/12">{value.title}</td>
                                    <td style={{ fontSize: "11px" }} className="w-3/12 self-center text-center text-gray-500">{value.date}</td>
                                    <td className="font-bold text-gray-800 text-center w-3/12">{value.amount}</td>
                                    <td className="w-1/12"><span className="flex justify-end text-gray-400"><InlineIcon className="self-center" icon={threeDotsVertical} /></span></td>
                                </div>
                            )
                        }
                    </table>
                </div>

            </div>

            <div className="w-4/12">

            </div>
        </div>
    )
}

export default Dashboard;