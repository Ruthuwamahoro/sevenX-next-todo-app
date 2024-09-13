import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { ContactForm } from "./ContactForm";
import { AccordionDemo } from "./FrequentlyQuestion";

export function ContactUs() {
  return (
    <section className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h4 className="text-3xl font-bold text-center text-gray-800 mb-10" data-aos="fade-up">Get in Touch with Us</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
          <FaPhoneVolume className="text-gray-900 text-5xl mb-4" />
          <p className="text-lg text-gray-700 font-medium mb-2">Call Us</p>
          <p className="text-sm text-gray-500">+123-456-7890</p>
        </div>

        <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
          <IoLocation className="text-green-500 text-5xl mb-4" />
          <p className="text-lg text-gray-700 font-medium mb-2">Visit Us</p>
          <p className="text-sm text-gray-500">123 Main Street, Anytown, USA</p>
        </div>

        <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
          <IoMdMailUnread className="text-pink-500 text-5xl mb-4" />
          <p className="text-lg text-gray-700 font-medium mb-2">Email Us</p>
          <p className="text-sm text-gray-500">info@example.com</p>
        </div>
      </div>

      <div className="border-t border-gray-300 my-12"></div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="500">
          <AccordionDemo />
        </div>
      </div>
    </section>
  );
}
