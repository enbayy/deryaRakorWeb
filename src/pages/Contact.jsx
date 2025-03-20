import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form başarıyla gönderildi!");
    };

    return (
        <div data-aos="zoom-in" data-aos-once="true" className="bg-white dark:bg-[#0F172A] text-[#1E293B] dark:text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-transparent p-8 space-y-6 rounded-lg">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1E293B] dark:text-white font-poppins">Bize Ulaşın</h2>
                        <p className="text-[#475569] dark:text-[#CBD5E1] font-poppins">
                            Sorularınız için bizimle iletişime geçin.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-bold">Adınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-md bg-[#F8FAFC] dark:bg-[#334155] border border-[#D22128] dark:border-[#E9C46A] focus:ring-2 focus:ring-[#E9C46A]"
                                    required
                                    placeholder="Adınızı girin"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-bold">E-posta</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-md bg-[#F8FAFC] dark:bg-[#334155] border border-[#D22128] dark:border-[#E9C46A] focus:ring-2 focus:ring-[#E9C46A]"
                                    required
                                    placeholder="E-posta adresinizi girin"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-bold">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 h-40 rounded-md bg-[#F8FAFC] dark:bg-[#334155] border border-[#D22128] dark:border-[#E9C46A] focus:ring-2 focus:ring-[#E9C46A]"
                                    required
                                    placeholder="Mesajınızı buraya yazın"
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-9 py-4 bg-[#D22128] dark:bg-[#E9C46A] text-white hover:bg-[#E9C46A] dark:hover:bg-[#BF3A26] rounded-tl-3xl rounded-br-3xl">
                                    Mesajı Gönder
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-transparent p-8 space-y-6 rounded-lg">
                        <h2 className="text-2xl font-semibold">İrtibat Bilgileri</h2>
                        <p><strong>Adres:</strong> Fevzi Çakmak Mh. Bayır Özel Org. San. 10670. Sok. No:31 - 31A Karatay- KONYA / TURKIYE</p>
                        <p><strong>Telefon:</strong> +90 332 502 09 36</p>
                        <p><strong>Faks:</strong> +90 332 502 09 38</p>
                        <p><strong>Web:</strong> www.deryarakor.com</p>
                        <p><strong>E-Posta:</strong> info@deryarakor.com</p>
                        <div className="border-2 border-[#D22128] dark:border-[#E9C46A] rounded-xl overflow-hidden">
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