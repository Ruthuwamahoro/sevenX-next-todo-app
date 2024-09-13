import { ResizableDemo } from "./FocusCard";

export const FocusDescription = () => {
    return (
        <div className="">
            <p className="py-14 text-2xl text-center font-extrabold">
                <span>-</span><span className="text-black">OUR FOCUS</span><span>-</span>
            </p>
            <div className="flex justify-around">
                <ResizableDemo image='https://images.cdn-files-a.com/ready_uploads/media/6503482/400_5f5c6a3662292.jpg' title="Spread Gospel" content="Through this we are ensured that we will be able to reach further to those unreached people. Through sharing our faith in Jesus Christ which seems like turning the lifeboat around someone who was drowning." bibleVerse="Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. Matthew 28:18-20"/>
                <ResizableDemo image='https://images.cdn-files-a.com/ready_uploads/media/8900450/400_6373aca91b8a6.jpg' title="Child Education Sponsorship" content="Crystal MF is dedicated to helping children grow up to be like Jesus by caring for their entire being and ensuring they are developing intellectually, physically, spiritually, and socially." bibleVerse="Jesus grew in wisdom and stature and in favor with God and man.LUKE 2:52"/>
            </div>
        </div>
    );
};