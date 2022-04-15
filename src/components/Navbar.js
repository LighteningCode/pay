import React from 'react'
import { InlineIcon } from "@iconify/react";
import searchIcon from '@iconify-icons/bi/search';
import bellIcon from '@iconify-icons/bi/bell';

function Navbar({openModal}) {
    return (
        <nav className="flex flex-row md:justify-between mt-3 pl-5 md:pl-0">

            <section className="mr-auto md:mr-0 md:w-4/6 flex flex-row">

                <div onClick={openModal} style={{width:"35px"}} className="hidden md:flex flex-col pl-0 pr-1 py-1 mr-1 self-center">
                    <div className="w-full h-1 mb-1 bg-black rounded-lg">&nbsp;</div>
                    <div className="w-full h-1 mb-1 bg-black rounded-lg">&nbsp;</div>
                    <div className="w-full h-1 mb-1 bg-black rounded-lg">&nbsp;</div>
                </div>

                <figure className="mr-16 md:mr-2">
                    <p className="font-extrabold md:text-lg  text-2xl">Pay</p>
                </figure>

                <div className="bg-white rounded-2xl md:hidden px-4 pb-1 pt-1 md:w-9/12 focus:outline-none text-gray-400 flex flex-row">
                    <InlineIcon className="self-center text-xs text-gray-700" icon={searchIcon} />
                    <input style={{fontSize:"10px"}} placeholder="Search" className="text-sm pl-2 w-44" value={''} />
                </div>

                <div className="md:flex flex-row hidden">
                    <div className="self-center"><InlineIcon className="self-center text-xl text-gray-700" icon={searchIcon} /></div>
                </div>
            </section>

            <section className="flex flex-row justify-end w-auto md:w-2/6">
                <select style={{fontSize:"14px"}} className="text-sm bg-transparent outline-none ring-gray-700 focus:ring py-2 px-3 self-center mr-1">
                    <option>EN</option>
                    <option>FR</option>
                    <option>GR</option>
                </select>
                <div className="flex flex-row self-center md:mr-2 mr-10">
                    <InlineIcon icon={bellIcon} className="h-6 w-6" />
                </div>
                <figure className="self-center">
                    <img src="./me.jpg" className="rounded-full" width="30" />
                </figure>
            </section>

        </nav>
    );
}



export default Navbar;