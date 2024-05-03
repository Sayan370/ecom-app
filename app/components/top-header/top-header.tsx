import React from 'react'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsHandbag, BsSearch } from 'react-icons/bs';
const TopHeader = () => {
    return (
        <div className='header pt-2'>
            <div className='topnav flex flex-row justify-between px-6 text-sm font-medium'>
                <div className='left-menu flex gap-2'>
                    <div>Account</div>
                    <div>Track Order</div>
                    <div>Support</div>
                </div>
                <div className='right-menu flex'>
                    <div>language</div>
                </div>
            </div>
            <nav className="w-full flex flex-row justify-between p-6">
                <div className="flex w-1/4 items-center flex-shrink-0 mr-10">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Dream Shop9</span>
                </div>
                <div className='flex w-2/3 gap-5 items-center'>
                    <form className='w-full'>
                        <div className="relative w-full flex flex-row">
                            <input type="search" id="search-dropdown" className="block  p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-50 border-l-2 border border-gray-300   dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Products..." required />
                            <select defaultValue={'DEFAULT'} className='left-[-5px] relative block p-2.5 w-1/3 z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '>
                                <option value={'DEFAULT'}>Category</option>
                                <option value={'Smart-Phone'}>Smart Phone</option>
                                <option value={'Smart-Watch'}>Smart Watch</option>
                                <option value={'Laptop'}>Laptop</option>
                                <option value={'Accesories'}>Accesories</option>
                            </select>
                            <button type="submit" className="relative top-0 left-[-5px] p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <BsSearch />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-row w-1/3 justify-end items-center'>
                    <span className='px-2'><AiOutlineHeart /></span>
                    <span className='px-2'><BsHandbag /></span>
                    <span className='px-2'><AiOutlineUser /></span>
                </div>
            </nav>
        </div>
    )
}

export default TopHeader;