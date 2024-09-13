import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa";
import { CarouselPlugin } from './ImageSlider';

export const LandingPage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-900">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-80"></div>

            {/* Main Content */}
            <div className="absolute inset-0 flex flex-col justify-center text-center px-6 sm:px-12 z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto space-y-12 sm:space-y-0 sm:space-x-16">
                    
                    {/* Left Section (Text) */}
                    <div className="text-white sm:w-1/2">
                        <div className="mb-8">
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-4">
                                Crystal Mercy Fellowship
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto">
                                Making Disciples of Jesus Christ who Love God and Love People
                            </p>
                        </div>

                        {/* Donation & Call to Action */}
                        <div className="bg-gray-800/80 text-white p-10 rounded-lg shadow-lg">
                            <p className="text-sm font-bold uppercase mb-3 text-pink-400">Donate to Change Lives</p>
                            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                                Lend a Helping Hand <br /> to Those in Need
                            </h2>
                            <p className="text-base sm:text-lg mb-8">
                                We work to build impactful corporate social responsibility strategies that touch lives and transform communities.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button variant="outline" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md">
                                    Donate now
                                </Button>
                                <Button variant="outline" className="border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md">
                                    Get in touch
                                    <FaArrowRight size={15} className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2">
                        <CarouselPlugin />
                    </div>
                </div>
            </div>
        </div>
    );
};
