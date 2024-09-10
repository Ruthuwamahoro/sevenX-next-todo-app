import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CarouselPlugin } from './ImageSlider';

export const LandingPage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://i.pinimg.com/564x/10/8d/60/108d60e32e0375c2a03cf7278dc42c8c.jpg"
                alt="Landing page background"
                layout="fill"
                objectFit="cover"
                className="object-cover object-center"
            />
            {/* Dark Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-10">
                {/* Main Heading */}
                <div className="text-white mb-10 animate-fade-in">
                    <h1 className="text-6xl font-extrabold mb-6 tracking-wider">
                        Crystal Mercy Fellowship
                    </h1>
                    <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
                        Making Disciples of Jesus Christ who Love God and Love People
                    </p>
                </div>

                {/* Call to Action Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-6xl mx-auto space-y-8 sm:space-y-0 sm:space-x-8 animate-slide-up">
                    <div className="text-left sm:w-1/2">
                        <p className="text-sm font-bold text-gray-500 uppercase mb-2">Always donate for children</p>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
                            Lend a Helping Hand <br /> to Those in Need
                        </h1>
                        <p className="text-gray-700 text-lg mb-6">
                            We help companies develop powerful corporate social responsibility, grantmaking, and employee engagement strategies that impact lives.
                        </p>
                        <Button variant="outline" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl px-6 py-5 transform transition hover:scale-105 hover:shadow-xl">
                            Donate now
                        </Button>
                    </div>

                    {/* Carousel Section */}
                    <div className="relative sm:w-1/2">
                        <CarouselPlugin />
                        {/* Decorators */}
                        <div className="absolute top-0 left-0 bg-slate-300 w-40 h-10 opacity-50 rounded-lg"></div>
                        <div className="absolute bottom-0 right-0 bg-slate-300 w-40 h-10 opacity-50 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
