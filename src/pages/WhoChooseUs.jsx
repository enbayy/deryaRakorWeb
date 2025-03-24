import React, { useEffect, useState, useRef } from "react";

const WhyChooseUs = () => {
  const stats = [
    { value: 30, label: "Yıllık Tecrübe", suffix: "+" },
    { value: 1500, label: "Kapalı Üretim Alanı", suffix: "m²" },
    { value: 100, label: "Müşteri Memnuniyeti", suffix: "%" },
    { value: 50, label: "Deneyimli Çalışan", suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 100;
          const intervalTime = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setCounts(stats.map(stat => Math.round((stat.value / steps) * currentStep)));
            if (currentStep === steps) clearInterval(interval);
          }, intervalTime);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="container bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-[#D22128] mb-6">Neden Derya Rakor?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          30 yılı aşkın tecrübemiz, yüksek kalite standartlarımız ve müşteri
          memnuniyetine verdiğimiz önemle sektörde fark yaratıyoruz.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-lg p-8 rounded-2xl transform transition duration-300 hover:scale-105">
            <h3 className="text-4xl font-extrabold text-[#D22128]">
              {counts[index]}{stat.suffix}
            </h3>
            <p className="text-gray-800 mt-3 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#D22128]">
          Kalite ve Güvenin Adresi
        </h3>
        <p className="text-gray-700 mt-5 text-lg leading-relaxed">
          Derya Rakor olarak, hidrolik bağlantı elemanları sektöründe güvenilir bir marka
          olma hedefiyle, müşteri ihtiyaçlarını en iyi şekilde karşılamak için çalışıyoruz.
        </p>
      </div>

      <div className="text-center mt-6">
        <button
          href="/iletisim"
          className="rounded-md border-2 border-[#D22128] hover:bg-[#D22128]/80 hover:text-black duration-500 py-2 px-6 text-[#D22128] tracking-wider font-sans font-semibold"
        >
          İletişime Geç
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;