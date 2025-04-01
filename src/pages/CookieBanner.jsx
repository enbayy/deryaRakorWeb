import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CookieBanner = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookiesAccepted", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-950 text-gray-300 p-5 flex justify-between items-center leading-relaxed flex-col sm:flex-row z-40">
            <p className="text-base flex-1 pr-6 font-poppins">
                {t("cookieMessage")}{" "}
                <a href="/cerez-politikasi" className="text-blue-400 hover:underline">
                    {t("cookiePolicy")}
                </a>
            </p>
            <div className="flex space-x-4">
                <button
                    className="bg-green-500/50 hover:bg-green-600 text-white px-4 py-2 text-base font-semibold rounded"
                    onClick={handleAccept}
                >
                    {t("accept")}
                </button>
                <button
                    className="bg-red-500/50 hover:bg-red-600 text-white px-4 py-2 text-base font-semibold rounded"
                    onClick={handleReject}
                >
                    {t("reject")}
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;