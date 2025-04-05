import Image from "next/image";
import my_photo from '@/../public/images/my.jpg'
import { FacebookOutlined, InstagramOutlined, MailOutlined, TwitterOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <div >
      <div className=" grid items-center h-screen justify-center">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="col-span-1 grid justify-center"> 
            <Image src={my_photo} alt="my_profile" width={210} style={{ borderRadius: "5000px", height: "210px", }} className="animate-morph border-[5px] border-[#b7bbb11e]"/>
          </div>
          <div className="col-span-1 grid justify-center w-100">
            <h1 className="text-4xl py-4 text-white">Alpamis Joldasov</h1>
            <p className="py-4 saira font-medium text-[#B7BBB1]">I am a Frontend Developer at heart and create features that are best suited for the job at hand.</p>
            <div className="flex justify-center items-center bg-amber-100">
            <FacebookOutlined className="text-2xl"/>
            <TwitterOutlined className="text-2xl col-span-1"/>
            <InstagramOutlined className="text-2xl col-span-1"/>
            <MailOutlined className="text-2xl col-span-1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
