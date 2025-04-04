import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PopupMenu = ({ imageSrc }) => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
        if (location.pathname === "/" && !sessionStorage.getItem("firstVisit")) {
            setIsVisible(true);
            sessionStorage.setItem("firstVisit", "true"); 
        }
    }, [location]); 

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50">
                <div className="p-4 rounded-lg flex justify-center items-center bg-white relative">
                    <img
                        src={imageSrc}
                        alt="celebration"
                        className="max-w-full max-h-[400px] rounded-md"
                    />
                    <button
                        onClick={handleClose}
                        className="absolute top-0 right-0 text-white bg-red-500 p-2 hover:bg-red-700 focus:outline-none"
                    >
                        X
                    </button>
                </div>
            </div>
        )
    );
};

export default PopupMenu;