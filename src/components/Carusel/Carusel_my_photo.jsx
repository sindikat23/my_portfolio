import { Carousel } from 'antd';
import Image from 'next/image';
import React from 'react'
import my_photo from '@/../public/images/my.jpg'
import my_photo2 from '@/../public/images/1.jpg'
import my_photo3 from '@/../public/images/2.jpg'
import my_photo4 from '@/../public/images/4.jpg'



const Carusel_my_photo = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    // { borderRadius: "5000px", height: "210px", }
    return (
        <div className='w-50 h-50 rounded-[500px] overflow-hidden border-3 border-gray-300'>
            <Carousel autoplay>
                <div>
                    <Image src={my_photo} alt="my_profile" width={300} style={{ height: "250px", }} className="" />
                </div>
                <div>
                    <Image src={my_photo2} alt="my_profile" width={300} style={{ height: "250px", }} className="" />
                </div>
                <div>
                    <Image src={my_photo3} alt="my_profile" width={300} style={{ height: "250px", }} className="" />
                </div>
                <div>
                    <Image src={my_photo4} alt="my_profile" width={300} style={{ height: "200px", }} className="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Carusel_my_photo