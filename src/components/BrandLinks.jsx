import React from "react";
import { SiFacebook, SiLinkedin, SiInstagram, SiTwitter } from "react-icons/si";
import { useAnimate } from "framer-motion";

const BrandLinks = () => {
    return (
        <div className="bg-white dark:bg-black px-4 py-12">
            <div className="mx-auto max-w-7xl">
                <ClipPathLinks />
            </div>
        </div>
    );
};

const ClipPathLinks = () => {
    return (
        <div className="grid grid-cols-4 divide-neutral-900">
            <LinkBox Icon={SiFacebook} href="https://facebook.com" />
            <LinkBox Icon={SiLinkedin} href="https://linkedin.com" />
            <LinkBox Icon={SiInstagram} href="https://instagram.com" />
            <LinkBox Icon={SiTwitter} href="https://twitter.com" />
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
    const [scope, animate] = useAnimate();

    const getNearestSide = (e) => {
        const box = e.target.getBoundingClientRect();
        const sides = [
            { proximity: Math.abs(box.left - e.clientX), side: "left" },
            { proximity: Math.abs(box.right - e.clientX), side: "right" },
            { proximity: Math.abs(box.top - e.clientY), side: "top" },
            { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
        ];
        return sides.sort((a, b) => a.proximity - b.proximity)[0].side;
    };

    const handleMouseEnter = (e) => {
        animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[getNearestSide(e)] });
    };

    const handleMouseLeave = (e) => {
        animate(scope.current, { clipPath: EXIT_KEYFRAMES[getNearestSide(e)] });
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative grid h-12 w-full place-content-center sm:h-12 md:h-12 p-2"
        >
            <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="text-xl sm:text-3xl lg:text-4xl" />
            </a>
            <div ref={scope} style={{ clipPath: BOTTOM_RIGHT_CLIP }} className="absolute inset-0 grid place-content-center bg-[#D22128] dark:bg-white text-white dark:text-[#1E293B]">
                <Icon className="text-xl sm:text-3xl md:text-4xl " />
            </div>
        </div>
    );
};

export default BrandLinks;