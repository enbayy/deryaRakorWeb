import React from "react";
import { useParams } from "react-router-dom";
import foto1 from "../assets/hidrolikLiftParca.png";
import foto2 from "../assets/hidrolikSilindir.png";
import foto3 from "../assets/hidrolikDevreBoruları.png";
import foto4 from "../assets/hortumBasliklari.png";
import hidrolikDevreBorulari from "../data/hidrolikDevreBorulari";
import hidrolikLiftParcalari from "../data/hidrolikLiftParcalari";
import hidrolikSilindirler from "../data/hidrolikSilindirler";
import hidrolikPnomatikHortumVeBasliklari from "../data/hidrolikPnomatikHortumVeBasliklari";

const categories = [
    { title: "HİDROLİK LİFT PARÇALARI", image: foto1, products: hidrolikLiftParcalari },
    { title: "HİDROLİK SİLİNDİRLER", image: foto2, products: hidrolikSilindirler },
    { title: "HİDROLİK DEVRE BORULARI", image: foto3, products: hidrolikDevreBorulari },
    { title: "HİDROLİK-PNÖMATİK HORTUM VE BAŞLIKLARI", image: foto4, products: hidrolikPnomatikHortumVeBasliklari },
];

const normalizeTitle = (title) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c");
};

const CategoryDetail = () => {
    const { title } = useParams();
    const formattedTitle = normalizeTitle(title);

    const category = categories.find(cat => normalizeTitle(cat.title) === formattedTitle);

    if (!category) {
        return <h2 className="text-center text-red-600 text-3xl mt-10">Kategori Bulunamadı</h2>;
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
            <div className="max-w-4xl w-full px-4 py-10">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 uppercase">
                    {category.title}
                </h2>

                <p className="text-lg text-gray-700 mt-4 text-center">
                    {category.products.length > 0 ? "Bu kategorideki ürünler:" : "Bu kategori için ürün bulunmamaktadır."}
                </p>

                {category.products.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.products.map((product) => (
                            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                                <img src={product.image} alt={product.title} className="w-full h-40 object-contain rounded-md" />
                                <h3 className="text-xl font-semibold text-center mt-2">{product.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryDetail;