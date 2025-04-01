import React from "react";
import { useTranslation } from "react-i18next"; 

const ContactHome = () => {
  const { t } = useTranslation(); 

  return (
    <div className="container bg-white dark:bg-black text-black dark:text-white p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-sans">
        {t("contactUs")}
      </h2>

      <div className="flex flex-col md:flex-col lg:flex-row items-start gap-8">
        <div className="space-y-1 w-full lg:w-1/2">
          <p className="text-lg font-sans">
            <span className="font-semibold text-gray-900 dark:text-white">{t("Address")}:</span> Fevzi Çakmak Mh. Bayır Özel Org. San. 10670. Sok. No:31 - 31A Karatay- KONYA / TURKIYE
          </p>
          <p className="text-lg font-sans">
            <span className="font-semibold text-gray-900 dark:text-white">{t("Phone")}:</span> +90 332 502 09 36
          </p>
          <p className="text-lg font-sans">
            <span className="font-semibold text-gray-900 dark:text-white">{t("Fax")}:</span> +90 332 502 09 38
          </p>
          <p className="text-lg font-sans">
            <span className="font-semibold text-gray-900 dark:text-white">{t("Web")}:</span>
            <a href="https://www.deryarakor.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition hover:underline"> www.deryarakor.com</a>
          </p>
          <p className="text-lg font-sans">
            <span className="font-semibold text-gray-900 dark:text-white">{t("Email")}:</span>
            <a href="mailto:info@deryarakor.com" className="text-blue-500 hover:text-blue-600 transition hover:underline"> info@deryarakor.com</a>
          </p>
        </div>

        <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg w-full lg:w-1/2 mt-4 lg:-mt-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.285089238831!2d32.5590134!3d37.923769799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0938112bb307f%3A0x210d3f3e65e7162!2sDerya%20Rakor%20Hidrolik%20Rakor%20Mak.%20San.%20Tic.%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1742379502768!5m2!1str!2str"
            width="100%"
            height="350"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;