import React from "react";
import { useTranslation } from "react-i18next";

const ESales = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black text-center p-6">
            <h1 className="text-4xl font-bold text-[#D22128] mb-4 font-sans">
                {t("comingSoon")}
            </h1>
            <p className="text-lg text-gray-700 dark:text-white max-w-md font-poppins">
                {t("eSalesMessage")}
            </p>
        </div>
    );
};

export default ESales;