import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "welcome": "Welcome!",
            "home": "HOME",
            "production": "PRODUCTION",
            "about": "ABOUT US",
            "contact": "CONTACT",
            "aboutDescription1": "With our 30 years of experience, we represent quality in the industry. We add value to our business partners with our strong infrastructure and innovative solutions.",
            "aboutDescription2": "With our expertise in the industry, we help our clients gain a competitive advantage, focusing on quality and customer satisfaction in every project.",
            "learnMore": "Learn More",
            "productCategories": "PRODUCT CATEGORIES",
            "HİDROLİK LİFT PARÇALARI": "Hydraulic Lift Parts",
            "HİDROLİK SİLİNDİRLER": "Hydraulic Cylinders",
            "HİDROLİK DEVRE BORULARI": "Hydraulic Circuit Pipes",
            "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI": "Hydraulic-Pneumatic Hoses and Fittings",
            "footer_info": "Derya Rakor Hydraulic Rakor Machine Industry Trade Ltd. Co. © 2025",
            "whyChooseUsDescription": "We make a difference in the sector with our over 30 years of experience, high quality standards and the importance we give to customer satisfaction.",
            "qualityAndReliability": "Address of Quality and Trust",
            "companyDescription": "As Derya Rakor, we work to meet customer needs in the best way possible, with the aim of becoming a reliable brand in the hydraulic fittings sector.",
            "contactUs": "Contact Us",
            "yearsOfExperience": "Years of Experience",
            "closedProductionArea": "Closed Production Area",
            "customerSatisfaction": "Customer Satisfaction",
            "experiencedEmployees": "Experienced Employees",
            "contactUs": "Contact Us",
            "Address": "Address",
            "Phone": "Phone",
            "Fax": "Fax",
            "Web": "Website",
            "Email": "Email",
            "products": "PRODUCTS",
            "contact": "CONTACT",
            "location": "LOCATION",
            "contactDescription": "Contact us for your questions.",
            "name": "Name",
            "email": "Email",
            "message": "Message",
            "namePlaceholder": "Enter your name",
            "emailPlaceholder": "Enter your email address",
            "messagePlaceholder": "Write your message here",
            "submitMessage": "Submit",
            "contactInformation": "Contact Information",
            "desc": "Products in this category:",
        }
    },
    tr: {
        translation: {
            "welcome": "Hoşgeldiniz!",
            "home": "ANASAYFA",
            "production": "ÜRETİM",
            "about": "HAKKIMIZDA",
            "contact": "İLETİŞİM",
            "aboutDescription1": "30 yıllık deneyimimizle sektörde kaliteyi temsil ediyoruz. Güçlü altyapımız ve yenilikçi çözümlerimizle iş ortaklarımıza değer katıyoruz.",
            "aboutDescription2": "Sektördeki uzmanlığımızla müşterilerimizin rekabet avantajı elde etmesini sağlıyor, her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.",
            "learnMore": "Daha Fazlası",
            "productCategories": "ÜRÜN KATEGORİLERİ",
            "HİDROLİK LİFT PARÇALARI": "HİDROLİK LİFT PARÇALARI",
            "HİDROLİK SİLİNDİRLER": "HİDROLİK SİLİNDİRLER",
            "HİDROLİK DEVRE BORULARI": "HİDROLİK DEVRE BORULARI",
            "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI": "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI",
            "footer_info": "Derya Rakor Hidrolik Rakor Mak. San. Tic. Ltd. Şti. © 2025",
            "whyChooseUsDescription": "30 yılı aşkın tecrübemiz, yüksek kalite standartlarımız ve müşteri memnuniyetine verdiğimiz önemle sektörde fark yaratıyoruz.",
            "qualityAndReliability": "Kalite ve Güvenin Adresi",
            "companyDescription": "Derya Rakor olarak, hidrolik bağlantı elemanları sektöründe güvenilir bir marka olma hedefiyle, müşteri ihtiyaçlarını en iyi şekilde karşılamak için çalışıyoruz.",
            "contactUs": "Bize Ulaşın",
            "yearsOfExperience": "Yıllık Deneyim",
            "closedProductionArea": "Kapalı Üretim Alanı",
            "customerSatisfaction": "Müşteri Memnuniyeti",
            "experiencedEmployees": "Deneyimli Çalışanlar",
            "contactUs": "Bize Ulaşın",
            "Address": "Adres",
            "Phone": "Telefon",
            "Fax": "Faks",
            "Web": "Web Sitesi",
            "Email": "E-posta",
            "products": "ÜRÜNLER",
            "contact": "İLETİŞİM",
            "location": "KONUM",
            "contactDescription": "Sorularınız için bizimle iletişime geçin.",
            "name": "İsim",
            "email": "E-posta",
            "message": "Mesaj",
            "namePlaceholder": "Adınızı girin",
            "emailPlaceholder": "E-posta adresinizi girin",
            "messagePlaceholder": "Mesajınızı buraya yazın",
            "submitMessage": "Gönder",
            "contactInformation": "İrtibat Bilgileri",
            "desc": "Bu kategorideki ürünler:",
        }
    }
};

const savedLanguage = localStorage.getItem('language') || 'tr';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || "tr",
        fallbackLng: "tr",
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,
        }
    });

export default i18n;