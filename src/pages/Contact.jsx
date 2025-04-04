import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const form = useRef();
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [userIp, setUserIp] = useState("");

    useEffect(() => {
        const fetchUserIp = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setUserIp(data.ip);
            } catch (error) {
                console.error('IP adresi alınamadı', error);
            }
        };

        fetchUserIp();
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const getTimeZone = () => {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const timeZone = getTimeZone();

        emailjs
            .sendForm(
                'service_ywrwgsm',
                'template_6wind9k',
                form.current,
                '5AocTj0gORYoA0TyF',
                {
                    timeZone: timeZone,
                    userIp: userIp,
                }
            )
            .then(
                () => {
                    alert(t("successMessage"));
                },
                (error) => {
                    alert(t("failedMessage", { error: error.text }));
                }
            );
    };

    return (
        <div className="bg-white dark:bg-black text-black dark:text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div data-aos="fade-right" className="bg-white dark:bg-black p-8 rounded-lg space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white font-sans">{t("contactUs")}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">{t("contactDescription")}</p>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-black dark:text-white font-medium font-sans">{t("name")}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                                    required
                                    placeholder={t("namePlaceholder")}
                                />
                            </div>
                            <div>
                                <input type="hidden" name="timeZone" value={getTimeZone()} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-black dark:text-white font-medium font-sans">{t("email")}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                                    required
                                    placeholder={t("emailPlaceholder")}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-black dark:text-white font-medium font-sans">{t("message")}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 h-40 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
                                    required
                                    placeholder={t("messagePlaceholder")}
                                />
                            </div>
                            <div>
                                <input type="hidden" name="userIp" value={userIp} />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-3 bg-[#D22128] text-white rounded-xl transition duration-300">
                                    {t("submitMessage")}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div data-aos="fade-left" className="bg-white dark:bg-black p-8 rounded-lg space-y-1">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white font-sans">{t("contactInformation")}</h2>
                        <p className="text-lg text-black dark:text-white font-sans"><span className="font-medium">{t("Address")}:</span> Fevzi Çakmak Mh. Bayır Özel Org. San. 10670. Sok. No:31 - 31A Karatay- KONYA / TURKIYE</p>
                        <p className="text-lg text-black dark:text-white font-sans"><span className="font-medium">{t("Phone")}:</span> +90 332 502 09 36</p>
                        <p className="text-lg text-black dark:text-white font-sans"><span className="font-medium">{t("Fax")}:</span> +90 332 502 09 38</p>
                        <p className="text-lg text-black dark:text-white font-sans"><span className="font-medium">{t("Web")}:</span> <a href="https://www.deryarakor.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition hover:underline">www.deryarakor.com</a> </p>
                        <p className="text-lg text-black dark:text-white font-sans"><span className="font-medium">{t("Email")}:</span> <a href="mailto:info@deryarakor.com" className="text-blue-500 hover:text-blue-600 transition hover:underline">info@deryarakor.com</a> </p>
                        <div className="border-2 border-[#D22128] rounded-xl overflow-hidden">
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
            </div>
        </div>
    );
};

export default Contact;