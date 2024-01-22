import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuBar = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-5 m-2  shadow-lg'>
            <div className='flex col-span-1 '>
                <img
                    onClick={toggleMenuBar}
                    className='h-8 cursor-pointer'
                    alt="menu-icon"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
                />
                <a href="/">
                    <img className='h-8 mx-2'
                        alt="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    />
                </a>
            </div>
            <div className='col-span-10 text-center px-15'>
                <input type="text"
                    className='w-1/2 border p-2 border-gray-400 rounded-l-full' />
                <button
                    className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>
                    Search
                </button>
            </div>
            <div className='col-span-1'>
                <img
                    className="h-8"
                    alt="user-icon"
                    src="https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png"
                />
            </div>
        </div>
    )
}

export default Header