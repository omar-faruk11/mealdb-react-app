import React from 'react';
import { Link } from 'react-router-dom';

const Navication = () => {
    return (
        <div >
            <div className='shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-white py-4'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-sans'>
                    <span>

                    </span>
                    Designer
                </div>
                <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z[-1] left-0 w-fuk
                 md:w-auto md:pl-0 pl-9 transition-all duration500 ease-in'>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-gray-400 duration-500' to='/'>Home</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-gray-400 duration-500' to='/service'>Service</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-gray-400 duration-500' to='/about'>About</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-gray-400 duration-500' to='/blogs'>Blogs</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <Link className='text-gray-800 hover:text-gray-400 duration-500' to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        
        </div>
    );
};

export default Navication;