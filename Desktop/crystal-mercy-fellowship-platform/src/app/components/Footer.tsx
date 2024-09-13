import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

export function FooterLinks() {
  return (
    <div className="bg-gray-900 text-gray-300 py-12">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. Nullam venenatis mi nec libero.
          </p>
          <a href="#" className="inline-block text-sm text-pink-500 hover:text-pink-400">
            Read More &rarr;
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe to our Newsletter</h3>
          <p className="leading-relaxed mb-6">
            Stay updated with the latest news and special offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              className="w-full p-3 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-500"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white p-3 rounded-r-lg hover:bg-pink-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Section: Social Media & Copyright */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; 2023 Your Company. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-pink-500 transition">
            <BsInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-600 transition">
            <TbBrandYoutubeFilled className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition">
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition">
            <BsFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 transition">
            <BsLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="container mx-auto px-6 md:px-12 flex justify-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-400 transition"
        >
          <IoIosArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
