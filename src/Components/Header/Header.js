import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className="lg:px-12 bg-red-500 md:px-0">
            <div className='sm:mx-0 md:container md:mx-auto flex justify-between items-center px-16 '>
                <CustomLink to='/' className="">
                    <img className='rounded-full h-10 w-10 ' src={'https://w7.pngwing.com/pngs/4/102/png-transparent-fork-and-spoon-gps-logo-take-out-online-food-ordering-delivery-restaurant-the-restaurant-door.png'} alt="" />
                </CustomLink>
                <div className=" flex justify-center items-center gap-3 text-white">
                    <CustomLink className='p-2' to='/home'>Home</CustomLink>
                    <CustomLink className='p-2' to='/meal'>Meal</CustomLink>
                    <CustomLink className='p-2' to='/about'>About us</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;