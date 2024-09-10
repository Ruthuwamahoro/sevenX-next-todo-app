import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimonials() {
  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent className="relative w-full h-[400px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="flex justify-evenly items-center gap-4 p-4 animate__animated animate__slideInRight transition-transform duration-1000">
                {/* Left Image as a Circle */}
                <div className="flex-shrink-0">
                  <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-accent shadow-md">
                    <Image
                      src="https://i.pinimg.com/564x/10/8d/60/108d60e32e0375c2a03cf7278dc42c8c.jpg"
                      alt="Testimonial"
                      layout="fill"
                      objectFit="cover"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                {/* Right Side Text */}
                <div className="pl-6">
                  <Card className=" shadow-none  w-[900px] border-none">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-4">
                        Testimonial {index + 1}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent in nunc sit amet ligula vehicula varius. Id ad
                        dolorum, rem itaque vero repudiandae, vel sed ipsam
                        nesciunt quibusdam enim, dolores alias nihil eos.&quot;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </Carousel>
    </div>
  );
}
