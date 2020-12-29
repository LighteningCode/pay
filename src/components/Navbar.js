import React from 'react'
import { InlineIcon } from "@iconify/react";
import searchIcon from '@iconify-icons/bi/search';
import bellIcon from '@iconify-icons/bi/bell';

function Navbar() {
    return (
        <nav className="flex flex-row pl-5">
            <section className="mr-auto flex flex-row">
                <figure className="mr-8">
                    <p className="font-extrabold italic text-2xl">Pay</p>
                </figure>

                <div className="bg-white rounded-2xl px-4 pb-1 pt-1 focus:outline-none text-gray-400 flex flex-row">
                    <InlineIcon className="self-center" icon={searchIcon} />
                    <input placeholder="Search" className="text-sm pl-2" value={null} />
                </div>
            </section>

            <section className="flex flex-row">
                <select className="text-sm bg-transparent self-center mr-1">
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