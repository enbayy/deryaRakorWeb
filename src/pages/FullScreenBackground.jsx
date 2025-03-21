import React from "react";
import backgroundImage from "../assets/derya-1.jpg";

const FullScreenBackground = () => {
    return (
        <div className="relative">
            <div
                className="w-full min-h-[calc(100vw*(16/9))] h-screen bg-cover bg-[position:center_25%] bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <span className="animate-bounce text-white text-2xl">↓</span>
            </div>

            <div className="h-screen bg-white flex items-center justify-center">
                <h2 className="text-3xl font-bold">Diğer İçerik</h2>
            </div>
        </div>
    );
};

export default FullScreenBackground;