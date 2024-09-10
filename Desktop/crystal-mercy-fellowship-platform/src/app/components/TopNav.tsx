import { Button } from "@/components/ui/button"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";  
import { IoLogoYoutube } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";

// export function FirstTopNav() {
//     return (
//         <div>
//             <div className="flex items-center justify-between py-3 px-6 bg-gray-800 text-white border-b-2 border-gray-700">
//                 <div className="flex space-x-4">
//                     <div className="bg-blue-600 p-3 rounded-full transform hover:scale-110 transition-transform duration-300">
//                         <FaFacebook className="text-white" />
//                     </div>
//                     <div className="bg-pink-500 p-3 rounded-full transform hover:scale-110 transition-transform duration-300">
//                         <FaSquareInstagram className="text-white" />
//                     </div>
//                     <div className="bg-red-600 p-3 rounded-full transform hover:scale-110 transition-transform duration-300">
//                         <IoLogoYoutube className="text-white" />
//                     </div>
//                 </div>
//                 <div className="flex items-center space-x-8">
//                     <p className="flex items-center transform hover:scale-105 transition-transform duration-300">
//                         <FaLocationDot size={25} className="text-blue-300 font-bold" />
//                         <span className="px-3 text-gray-300">Kigali-Rwanda, KK01</span>
//                     </p>
//                     <TbMinusVertical size={40} className="text-gray-500"/>
//                     <p className="flex items-center transform hover:scale-105 transition-transform duration-300">
//                         <FaPhone size={25} className="text-blue-300 font-bold " />
//                         <span className="px-3 text-gray-300">0788888888</span>
//                     </p>
//                     <TbMinusVertical size={40} className="text-gray-500"/>
//                     <p className="flex items-center transform hover:scale-105 transition-transform duration-300">
//                         <LuClock4 size={25} className="text-blue-300 font-bold" />
//                         <span className="px-3 text-gray-300">9.00am-6.80pm</span>
//                     </p>
//                 </div>
//             </div>
//             <Menubar className="w-full border-none fixed top-0 left-0 z-50 flex items-center justify-between p-10 text-3xl">
//                 <MenubarMenu>
//                 <MenubarTrigger className="hover:text-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">Home</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                 <MenubarTrigger className="hover:text-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">Our Focus</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                 <MenubarTrigger className="hover:text-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">About Us</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                 <MenubarTrigger className="hover:text-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">Portfolio</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                 <MenubarTrigger className="hover:text-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">Contact Us</MenubarTrigger>
//                 </MenubarMenu>
//                 <MenubarMenu>
//                 <MenubarTrigger className="hover:text-blue-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">Donates</MenubarTrigger>
//                 </MenubarMenu>
//             </Menubar>
//         </div>
//     )
// }
export function FirstTopNav() {
    return (
        <div>
            <div className="flex items-center justify-between py-3 border-b-2 px-14">
                <div className="flex space-x-4">
                    <div className="bg-gray-200 p-3 rounded-full">
                        <FaFacebook className="text-black" />
                    </div>
                    <div className="bg-gray-200 p-3 rounded-full">
                        <FaSquareInstagram className="text-black" />
                    </div>
                    <div className="bg-gray-200 p-3 rounded-full">
                        <IoLogoYoutube className="text-black" />
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="flex items-center">
                        <span><FaLocationDot size={25}/></span>
                        <span className="px-3">Kigali-Rwanda, KK01</span>
                    </p>
                    <TbMinusVertical size={40}/>
                    <p className="flex items-center">
                        <span><FaPhone size={25}/></span>
                        <span className="px-3">0788888888</span>
                    </p>
                    <TbMinusVertical size={40}/>
                    <p className="flex items-center">
                        <span><LuClock4 size={25}/></span>
                        <span className="px-3">9.00am-6.80pm</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between py-3 px-14">
                <div className="flex">
                    <p>logo</p>
                    <div className="px-9">
                        <p>Company Name</p>
                        <p>Name</p>
                    </div>
                </div>
                <div>
                    <ul className="flex">
                        <Link href='#' className="px-5 font-semibold">Home</Link>
                        <Link href='#' className="px-5 font-semibold">Our Focus</Link>
                        <Link href='#' className="px-5 font-semibold">About Us</Link>
                        <Link href='#' className="px-5 font-semibold">Testimonials</Link>
                        <Link href='#'className="px-5 font-semibold">Portfolio</Link>
                        <Link href='#'className="px-5 font-semibold">Contact Us</Link>
                    </ul>
                </div>
                <div className="flex">
                    <p>logo</p>
                    <div className="px-9">
                        <p>Company Name</p>
                        <p>Name</p>
                    </div>
                    <div>
                       <Button variant="outline" className="bg-slate-800 text-white rounded-xl px-5 py-5">Donate</Button>
                    </div>
                </div>
            </div>

        </div>
    )
} 
  