import React from 'react'
import { InlineIcon } from "@iconify/react";
import searchIcon from '@iconify-icons/bi/search';
import bellIcon from '@iconify-icons/bi/bell';

function Navbar() {
    return (
        <nav className="flex flex-row md:justify-between mt-3 pl-5">

            <section className="mr-auto flex flex-row">
                <figure className="mr-16 md:mr-4">
                    <p className="font-extrabold md:text-lg  text-2xl">Pay</p>
                </figure>

                <div className="bg-white rounded-2xl md:hidden px-4 pb-1 pt-1 focus:outline-none text-gray-400 flex flex-row">
                    <InlineIcon className="self-center text-gray-700" icon={searchIcon} />
                    <input style={{fontSize:"10px"}} placeholder="Search" className="text-sm pl-2 w-44" value={''} />
                </div>

                <div>
                    <div><InlineIcon className="self-center text-gray-700" icon={searchIcon} /></div>
                </div>

            </section>

            <section className="flex flex-row w-auto">
                <select style={{fontSize:"10px"}} className="text-sm bg-transparent self-center mr-1">
                    <option>EN</option>
                </select>
                <div className="flex flex-row self-center mr-10">
                    <InlineIcon icon={bellIcon} />
                </div>
                <figure className="self-center">
                    <img src="./me.jpg" className="rounded-full" width="30" />
                </figure>
            </section>

        </nav>
    );
}



export default Navbar;