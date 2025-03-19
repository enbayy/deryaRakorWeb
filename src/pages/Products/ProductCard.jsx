import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg bg-white dark:bg-[#1E293B] p-6 text-center">
            <div className="h-48 bg-gray-200 flex items-center justify-center font-bold text-xl rounded-md">
                Resim {product.id}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
        </div>
    );
};

export default ProductCard;