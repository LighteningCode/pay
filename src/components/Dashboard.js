import React, { useEffect, useRef, useState } from 'react'
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
import { Doughnut, Line } from 'react-chartjs-2';
import { InlineIcon } from '@iconify/react';
import { Menu } from '@headlessui/react'



function TransactionItem({ title, date, amount, icon, showBottomBorder }) {

    const menuItems = ["Apple Pay", "Transfer to Account", "Report Item"]

    function MenuDropDown() {
        return (
            <Menu as="div" className="relative text-left flex justify-end">
                <Menu.Button className={"outline-none"}><span className=" z-40 text-gray-400 hover:text-black"><InlineIcon className="self-center w-5 h-5" icon={threeDotsVertical} /></span></Menu.Button>
                <Menu.Items className={"absolute z-50 flex flex-col border-white right-0 rounded-xl w-56 mt-2 origin-top-right bg-white shadow-lg ring-1 ring-black  ring-opacity-5 focus:outline-none"}>
                    {
                        menuItems.map((data,idx) =>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-white text-gray-800' : "bg-black text-white"} ${idx === 0 && "rounded-t-xl"} ${idx === menuItems.length - 1 && "rounded-b-xl"} ${idx !== menuItems.length - 1 && "border-b border-white"} pl-4 pr-2 py-4 font-thin text-left`}
                                    >
                                        {data}
                                    </button>
                                )}
                            </Menu.Item>
                        )
                    }
                </Menu.Items>
            </Menu>
        )
    }

    return (
        <div style={{ height: "60px" }} className={`text-base pb-5 mb-5 md:mb-1 flex flex-row justify-between ${(showBottomBorder) ? 'border-b' : ''} border-gray-300`}>
            <span className="text-2xl md:text-lg w-1/12 text-center self-center flex flex-row justify-center"><InlineIcon icon={icon} /></span>
            <span className="font-bold w-4/12 md:text-sm self-center pl-6 md:pl-2">{title}</span>
            <span style={{ fontSize: "13px" }} className="w-3/12 md:text-lg self-center text-center text-gray-500">{date}</span>
            <span className="font-bold md:text-sm self-center text-gray-800 text-center w-3/12">{amount}</span>
            <span className="w-1/12 self-center"><MenuDropDown /></span>
        </div>
    )
}



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

    const dougData = {
        labels: ['Gym', 'Car Repairs', 'Fried Plantain'],
        datasets: [{
            label: 'Amount of money',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 0.3)',
                'rgba(255, 255, 255, 0.1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1
        }]
    }

    const dougOpt = {
        maintainAspectRatio: false,
        tooltips: {
            enabled: false
        }
    }
    const lineOpt = {
        maintainAspectRatio: false,
        tooltips: {
            enabled: true
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: false,
                },
                gridLines: {
                    display: false,
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
            }],
        },
        aspectRatio: 2
    }


    const lineData = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 335);
        gradient.addColorStop(0, 'rgba(180,180,180,1)');
        gradient.addColorStop(1, 'rgba(50,50,50,0)');
        return {
            // The data for our dataset
            labels: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
            datasets: [{
                backgroundColor: gradient,
                borderColor: 'rgb(80, 80, 80)',
                pointColor: "#fff",
                pointStrokeColor: "#ff6c23",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ff6c23",
                data: [0, 10, 11, 2, 20, 19, 45],
                lineTension: 0.2
            }]

        }
    }

    return (
        <div className="flex flex-row md:flex-col h-full">

            <div className="w-8/12 flex flex-col md:w-full md:h-auto ">

                <div className="flex flex-row h-3/6 md:h-auto md:pb-10 pb-20 md:w-full md:flex-col">

                    <div className="w-1/2 mr-2 md:w-full md:mb-6 flex flex-col">
                        <p className="mb-7 md:mb-3 font-bold text-xl">Dashboard</p>
                        <Card />
                    </div>

                    <div className="w-1/2 md:w-full md:mt-3">
                        <p className="mb-7 md:mb-3 font-bold text-xl">Upcoming payments</p>

                        <div className="flex flex-row justify-around h-full w-full">
                            <Payment icon={briefcaseIcon} payment="Salary" description="Belong Interactive" amount="+$2000" />
                            <Payment icon={paypalIcon} payment="Paypal" description="Freelance payment" amount="+$4800" />
                        </div>
                    </div>
                </div>

                <div className="h-3/6 md:h-auto">
                    <nav className="flex flex-row md:mt-5">
                        <p className="mr-auto md:text-lg font-bold text-xl">Recent transactions</p>
                        <span className="flex flex-row">
                            <select className="text-xs text-gray-400 border rounded-md w-24 py-0.5 px-1 focus:ring ring-gray-700 outline-none  border-gray-200 mr-2">
                                <option>Sort by</option>
                            </select>
                            <div className="self-center">
                                <InlineIcon icon={sortAlphaDown} />
                            </div>
                        </span>
                    </nav>

                    <section className="w-full flex flex-col py-4">
                        {
                            recentTrans.map((value, idx) =>
                                <TransactionItem key={idx} {...value} idx={idx} showBottomBorder={idx !== recentTrans.length - 1} />
                            )
                        }
                    </section>
                </div>

            </div>

            <div className="w-4/12 md:w-full md:ml-0 relative flex flex-col bg-gray-100 rounded-3xl ml-5">

                <div className="absolute top-0 right-0 mt-5 mr-3">
                    <InlineIcon icon={threeDotsVertical} />
                </div>

                <div className="flex flex-col w-full mt-6 h-1/6">
                    <h6 style={{ fontSize: "14px" }} className="text-sm self-center text-gray-500">Saved this month</h6>
                    <h3 className="font-extrabold text-xl self-center text-gray-800">$25,990.00</h3>
                    <nav style={{ fontSize: "12px" }} className="flex flex-row mt-5 text-gray-400 justify-around px-10">
                        <span className="">Day</span>
                        <span className="">Week</span>
                        <span className="text-gray-800 font-bold">Month</span>
                        <span className="">Year</span>
                    </nav>
                </div>

                <div className="h-3/6">
                    <Line data={lineData} options={lineOpt} legend={false} />
                </div>

                <div className="h-2/6 self-center align-middle flex flex-col justify-end relative">
                    <div style={{ width: "250px", height: "120px", zIndex: 100, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.600)" }} className="bg-black rounded-xl mb-10 flex-row flex px-3 py-2 shadow-xl">
                        <data className="flex flex-col justify-center text-white mr-auto" style={{ fontSize: "16px" }}>
                            <div className="w-full flex flex-col">
                                <span className="text-center text-sm text-gray-400">Plan for 2020</span>
                                <span className="text-center w-full self">Completed</span>
                            </div>
                        </data>
                        <data className="flex flex-col justify-end relative">
                            <span className="absolute top-0 left-0 text-white text-xs w-full h-full flex flex-col justify-center"><p className="self-center font-bold">75%</p></span>
                            <Doughnut className="self-end" width={100} height={100} options={dougOpt} data={dougData} legend={false} />
                        </data>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;