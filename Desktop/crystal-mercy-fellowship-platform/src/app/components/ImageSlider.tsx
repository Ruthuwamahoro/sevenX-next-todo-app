// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import Image from 'next/image';
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselPlugin() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 5000, stopOnInteraction: true })
//   );

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       className="w-full max-w-xs"
//     >
//       <CarouselContent>
//         {[
//           "https://i.pinimg.com/originals/27/7d/b8/277db862272d857e336605fb44d4eb9e.jpg",
//           "https://i.pinimg.com/564x/b8/30/a5/b830a56ac71b299ac5fcc0e721a3e30f.jpg",
//           "https://i.pinimg.com/564x/7d/77/2c/7d772c85e491e2ef4e89499dc90220ff.jpg",
//         ].map((src, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <Image
//                     src={src}
//                     width={800}
//                     height={500}
//                     alt={`Image ${index + 1}`}
//                     className="relative z-10"
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//     </Carousel>
//   );
// }
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (plugin.current) {
      console.log("Autoplay plugin initialized");
    }
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {[
          "https://i.pinimg.com/originals/27/7d/b8/277db862272d857e336605fb44d4eb9e.jpg",
          "https://i.pinimg.com/564x/b8/30/a5/b830a56ac71b299ac5fcc0e721a3e30f.jpg",
          "https://i.pinimg.com/564x/7d/77/2c/7d772c85e491e2ef4e89499dc90220ff.jpg",
        ].map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={src}
                    width={1800}
                    height={500}
                    alt={`Image ${index + 1}`}
                    className="relative z-10"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

