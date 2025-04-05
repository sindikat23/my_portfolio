import React from 'react'

const Navbar = () => {
    return (
        <div className='grid items-center justify-center h-screen cursor-pointer'>
            <div className='grid gap-6 px-4 py-4 text-[#B7BBB1]'>
                <h1 className='uppercase text-2xl font-bold text-white '>Uzbekistan</h1>
                <ul className=' text-lg font-extralight leading-9 saira'>
                    <li className='hover:text-white hover:font-light'>Home</li>
                    <li className='hover:text-white hover:font-light'>About</li>
                    <li className='hover:text-white hover:font-light'>Service</li>
                    <li className='hover:text-white hover:font-light'>Portfolio</li>
                    <li className='hover:text-white hover:font-light'>News</li>
                    <li className='hover:text-white hover:font-light'>Contact</li>
                </ul>
                <p className='font-light lobster'>© 2025 Uzbekistan Created<br />
                     by Codeefly</p>
            </div>
        </div>
    )
}

export default Navbar