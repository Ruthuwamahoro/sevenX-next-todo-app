import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageCircle } from "lucide-react";
import { AccordionDemo } from "./FrequentlyQuestion";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    // <div className="max-w-2xl">
        // <h4 className="text-black">Send your message</h4>
        <Card className="w-full max-w-xl mx-auto border-none rounded-xl bg-gray-50 p-12">
        <CardHeader className="text-center mb-6">
        <CardDescription className="text-gray-800 text-lg lg:text-xl font-semibold leading-relaxed tracking-wide">
            We&rsquo;d love to hear from you! Fill out the form below.
        </CardDescription>
        </CardHeader>

        <form>
            <CardContent className="grid gap-8">
            {/* Name Field */}
            <div className="grid gap-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 font-medium">
                <User className="text-blue-500" size={18} /> Your Name
                </Label>
                <Input
                id="name"
                type="text"
                aria-label="Your Name"
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-md border-gray-300 text-gray-700 shadow-inner bg-gray-100 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
                />
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 font-medium">
                <Mail className="text-blue-500" size={18} /> Your Email
                </Label>
                <Input
                id="email"
                type="email"
                aria-label="Your Email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-md border-gray-300 shadow-inner bg-gray-100 text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
                />
            </div>

            {/* Message Field */}
            <div className="grid gap-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-gray-700 font-medium">
                <MessageCircle className="text-blue-500" size={18} /> Your Message
                </Label>
                <Textarea
                id="message"
                aria-label="Your Message"
                placeholder="How can we help?"
                value={formState.message}
                onChange={handleChange}
                rows={6}
                className="px-4 py-3 rounded-md border-gray-300 shadow-inner bg-gray-100 text-gray-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:bg-white hover:shadow-lg"
                />
            </div>
            </CardContent>

            <CardFooter className="pt-8">
            <Button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 px-5 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl  hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl"
            >
                Send Message
            </Button>
            </CardFooter>
        </form>
        </Card>
    // </div>
  );
}
