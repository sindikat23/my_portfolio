import Image from "next/image";
import my_photo from '@/../public/images/my.jpg'
import { Button } from "antd";
import Link from "next/link";
import Carusel_my_photo from "@/components/Carusel/Carusel_my_photo";
import { FacebookFilled, InstagramFilled, TwitterSquareFilled, WhatsAppOutlined } from "@ant-design/icons";
import { Color } from "antd/es/color-picker";


export default function Home() {

  return (
    <div  className="container mx-auto">
      <div className=" grid items-center h-screen justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          <div className="col-span-1 flex justify-center">
            <Carusel_my_photo />
          </div>
          <div className="col-span-1 grid justify-center w-100">
            <h1 className="text-4xl py-4 text-white">Alpamis Joldasov</h1>
            <p className="py-4 saira font-medium text-[#B7BBB1]">I am a Frontend Developer at heart and create features that are best suited for the job at hand.</p>
            <div className="flex gap-4">
              <Link href={"https://www.facebook.com/share/1DmUr7ovTv/"}><button className="text-white text-2xl hover:text-[#5c98f1c4] duration-500"><FacebookFilled /></button></Link>
              <Link href={"https://x.com/JoldasovAlpamis?t=Q-3nE8eRyR12f7-ys92KGw&s=09"}><button className="text-white text-2xl hover:text-[#5cf1d1c4] duration-500"><TwitterSquareFilled /></button></Link>
              <Link href={"https://www.instagram.com/2anton_23?igsh=dWdiZndpNTJveXNo"}><button className="text-white text-2xl hover:text-[#f1db5cc4] duration-700"><InstagramFilled /></button></Link>
              <Link href={"https://wa.me/qr/ZPKUIXTDLJSPK1"}><button className="text-white text-2xl hover:text-[#5db168e3] duration-700"><WhatsAppOutlined /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
