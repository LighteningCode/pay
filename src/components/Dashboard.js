import React from 'react'
import Card from './Card'
import Payment from './Payment'
import briefcaseIcon from '@iconify-icons/bi/briefcase';

function Dashboard() {
    return (
        <div className="flex flex-row">
            <div className="w-8/12 flex flex-row">
                <div className="w-1/2">
                    <p className="mb-2 font-bold">Dashboard</p>
                    <Card />
                </div>
                <div className="w-1/2">
                    <p className="mb-2 font-bold">Upcoming payments</p>

                    <div className="flex flex-row">
                        <Payment icon={briefcaseIcon} payment="Salary" description="Belong Interactive" amount="+$2000" />
                        <Payment icon={briefcaseIcon} payment="Salary" description="Belong Interactive" amount="+$2000" />
                    </div>

                </div>

            </div>

            <div className="w-4/12">

            </div>
        </div>
    )
}

export default Dashboard;