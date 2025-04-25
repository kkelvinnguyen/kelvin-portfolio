import { useRef, useEffect } from "react";

import polaroid1 from "../assets/profile/polaroid1.png";
import polaroid2 from "../assets/profile/polaroid2.png";
import polaroid3 from "../assets/profile/polaroid3.png";
import polaroid4 from "../assets/profile/polaroid4.png";
import polaroid5 from "../assets/profile/polaroid5.png";
import polaroid6 from "../assets/profile/polaroid6.png";
import polaroid7 from "../assets/profile/polaroid7.png";
import polaroid8 from "../assets/profile/polaroid8.png";

const images = [polaroid1, polaroid2, polaroid3, polaroid4, polaroid5, polaroid6, polaroid7, polaroid8];

export default function InfiniteSlider() {
    const sliderRef = useRef(null);

    useEffect(() => {
        let offset = 0;
        const slider = sliderRef.current;
        const scrollSpeed = 1;

        const animate = () => {
            if (slider) {
                offset += scrollSpeed;
                if (offset >= slider.scrollWidth / 2) {
                    offset = 0;
                }
                slider.scrollLeft = offset;
            }
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div >
            <h1 className=" ml-5 text-[0.7rem] lg:ml-20 sm:ml-10 lg:text-[1rem] md:text-[0.9rem] md:ml-15 font-sans text-[#1a2c70] flex pb-2">
                <i>scroll down to see my projects!</i>
            </h1>
            <div className="relative overflow-hidden scrollbar-hide">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#e7e7e7] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#e7e7e7] to-transparent z-10" />
                <div className="flex whitespace-nowrap overflow-x-scroll scrollbar-hide" ref={sliderRef}>
                    {[...images, ...images].map((src, i) => (
                        <img key={i} src={src} alt={`slide-${i}`} className="h-48 w-auto object-cover flex-shrink-0 mr-4" />
                    ))}
                </div>
            </div>
        </div>
    );
}