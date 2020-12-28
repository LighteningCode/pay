import React from 'react'
import { InlineIcon } from "@iconify/react";
import searchIcon from '@iconify-icons/bi/search';

function Navbar() {
    return (
        <nav className="flex flex-row">
            <section className="mr-auto flex flex-row">
                <figure>
                    <p>Pay</p>
                </figure>

                <div className="bg-white rounded-2xl px-4 pb-1 pt-1  text-gray-400 flex flex-row">
                    <InlineIcon className="self-center" icon={searchIcon} />
                    <input placeholder="Search" className="text-sm pl-2" value={null} />
                </div>
            </section>

            <section>
                <select>
                    <option>EN</option>
                </select>

                <figure>
                    <img src="" width="40" />
                </figure>
            </section>

        </nav>
    );
}



export default Navbar;