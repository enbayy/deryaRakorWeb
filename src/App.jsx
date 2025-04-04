import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { RiWhatsappFill } from "react-icons/ri";
import Breadcrumb from "./components/Breadcrumb";
import KategoriDetay from "./pages/CategoryDetail";
import AboutSection from "./pages/AboutSection";
import WhyChooseUs from "./pages/WhoChooseUs";
import ContactHome from "./pages/ContactHome";
import News from "./pages/News";
import ESales from "./pages/eSales";
import CookieBanner from "./pages/CookieBanner";
import NewsDetail from "./pages/NewsDetail";
import PopupMenu from "./components/PopupMenu";
import imageSrc from "./assets/popup.jpg"

const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductPage = lazy(() => import("./pages/Products/ProductsPage"));
const AllProducts = lazy(() => import("./pages/Products/AllProductsPage"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Loading = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
        <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-[#D22128] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
                Yükleniyor...
            </p>
        </div>
    </div>
);

const App = () => {
    const [showSocialIcons, setShowSocialIcons] = useState(true);
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        import("./pages/Products/ProductsPage");
    }, []);

    return (
        <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
            <ScrollToTop />
            <Navbar />
            <Breadcrumb />
            <div className="fixed top-0 left-0 right-0 h-1 bg-white dark:bg-black z-30">
                <div
                    className="h-full bg-[#D22128]"
                    style={{ width: `${scrollPercentage}%` }}
                />
            </div>

            {showPopup && <PopupMenu imageSrc={imageSrc} />}

            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <AboutSection />
                                <ProductPage />
                                <WhyChooseUs />
                                <ContactHome />
                            </>
                        }
                    />
                    <Route
                        path="/urunler"
                        element={
                            <Suspense fallback={<Loading />}>
                                <ProductPage />
                            </Suspense>
                        }
                    />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/iletisim" element={<Contact />} />
                    <Route path="/urunler" element={<ProductPage />} />
                    <Route path="/urunlerimiz/:title" element={<KategoriDetay />} />
                    <Route path="/urunlerimiz" element={<AllProducts />} />
                    <Route path="/haberler" element={<News />} />
                    <Route path="/e-satis" element={<ESales />} />
                    <Route path="/haberler/:title" element={<NewsDetail />} />
                </Routes>
            </Suspense>
            <Footer />
            <CookieBanner />
            <a
                href="https://wa.me/905543059386"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-3 right-3 z-30 flex flex-col items-center space-y-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full"
            >
                <RiWhatsappFill size={25} />
            </a>
        </div>
    );
};

export default App;