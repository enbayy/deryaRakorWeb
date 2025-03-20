import React, { useEffect, useRef } from "react";

const References = () => {
    const marqueeRef = useRef(null);

    const generateRandomLogos = (count) => {
        return Array.from({ length: count }, (_, index) => `https://placehold.co/100x100?text=Logo${index + 1}`);
    };

    const companyLogos = generateRandomLogos(10);

    useEffect(() => {
        const marquee = marqueeRef.current;
        let scrollAmount = 0;
        let speed = 1;

        const moveMarquee = () => {
            if (marquee) {
                scrollAmount -= speed;
                if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                marquee.style.transform = `translateX(${scrollAmount}px)`;
            }
            requestAnimationFrame(moveMarquee);
        };

        moveMarquee();
    }, []);

    return (
        <div className="overflow-hidden relative w-full bg-white dark:bg-black py-6">
            <div className="flex items-center justify-center w-full">
                <div className="flex whitespace-nowrap gap-10" ref={marqueeRef}>
                    {companyLogos.concat(companyLogos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company Logo ${index + 1}`}
                            className="h-12 sm:h-16 md:h-20 filter grayscale dark:invert"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default References;