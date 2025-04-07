import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='grid items-center justify-center h-screen '>
            <div className='grid gap-6 px-4 py-4 text-[#B7BBB1] cursor-pointer'>
                <h1 className='uppercase text-3xl font-bold text-white '>Uzbekistan</h1>
                <ul className=' text-lg font-extralight leading-9 saira'>
                    <Link href={'/'}><li className='hover:text-white hover:font-light'>Home</li></Link>
                    <Link href={'/about-page'}><li className='hover:text-white hover:font-light'>About</li></Link>
                    <Link href={'/service-page'}><li className='hover:text-white hover:font-light'>Service</li></Link>
                    <li className='hover:text-white hover:font-light'>Portfolio</li>
                    <li className='hover:text-white hover:font-light'>News</li>
                    <Link href={'/contact-page'}><li className='hover:text-white hover:font-light'>Contact</li></Link>
                </ul>
                <p className='font-light lobster'>© 2025 Uzbekistan Created<br />
                     by Codeefly</p>
            </div >
        </div >
    )
}

export default Navbar