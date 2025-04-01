import React, { useState } from "react";

const CookieBanner = () => {
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
        <div className="fixed bottom-0 left-0 right-0 bg-black/50 text-gray-300 p-5 flex justify-between items-center leading-relaxed flex-col sm:flex-row">
            <p className="text-base flex-1 pr-6 font-poppins">
                "Sizlere daha iyi bir hizmet sunabilmek, site kullanımınızı analiz edebilmek ve tercihlerinize uygun içerikler gösterebilmek için çerezlerden faydalanıyoruz. ‘Kabul Et’ butonuna tıklayarak çerez kullanımını onaylamış olursunuz. Detaylı bilgi için
                <a href="/cerez-politikasi" className="text-blue-400 hover:underline"> Çerez Politikamızı</a> ziyaret edebilirsiniz."
            </p>
            <div className="flex space-x-4">
                <button
                    className="bg-green-500/50 hover:bg-green-600 text-white px-4 py-2 text-base font-semibold rounded"
                    onClick={handleAccept}
                >
                    Kabul Et
                </button>
                <button
                    className="bg-red-500/50 hover:bg-red-600 text-white px-4 py-2 text-base font-semibold rounded"
                    onClick={handleReject}
                >
                    Reddet
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;