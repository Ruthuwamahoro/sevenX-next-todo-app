import { Button } from "@/components/ui/button"
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";import { LuClock4 } from "react-icons/lu";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";

export function FirstTopNav() {
    return (
        <div className="w-full bg-white shadow-md">
            {/* Social Icons and Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-between py-3 px-6 border-b">
                <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-300 transition">
                        <FaFacebook className="text-blue-600" size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-300 transition">
                        <FaInstagram className="text-pink-600" size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-300 transition">
                        <FaYoutube className="text-red-600" size={20} />
                    </a>
                </div>
                <div className="flex items-center space-x-4 mt-3 md:mt-0">
                    <p className="flex items-center text-gray-600">
                        <FaLocationDot size={18} />
                        <span className="ml-2">Kigali-Rwanda, KK01</span>
                    </p>
                    <TbMinusVertical size={25} className="text-gray-400" />
                    <p className="flex items-center text-gray-600">
                        <FaPhone size={18} />
                        <span className="ml-2">0788888888</span>
                    </p>
                    <TbMinusVertical size={25} className="text-gray-400" />
                    <p className="flex items-center text-gray-600">
                        <LuClock4 size={18} />
                        <span className="ml-2">9:00am - 6:00pm</span>
                    </p>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center justify-between py-4 px-6">
                {/* Logo and Company Name */}
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-gray-800">Logo</div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-gray-800">Company Name</p>
                        <p className="text-sm text-gray-500">Slogan or Subtitle</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Home
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Our Focus
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        About Us
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Testimonials
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Portfolio
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">
                        Contact Us
                    </Link>
                </div>

                {/* Right Side: Donate Button */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block text-gray-700">
                        <p className="text-lg font-semibold">Call to Action</p>
                        <p className="text-sm text-gray-500">Subtitle here</p>
                    </div>
                    <Button variant="outline" className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition">
                        Donate
                    </Button>
                </div>
            </div>
        </div>
    );
}
