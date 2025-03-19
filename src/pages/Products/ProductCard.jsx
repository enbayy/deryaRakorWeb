import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-xl shadow-md bg-white dark:bg-[#1E293B] p-6 text-center cursor-pointer">
            <div className="h-60 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain rounded-md"
                />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
            <h3 className="mt-2 text-lg font-semibold">{product.description}</h3>
        </div>
    );
};

export default ProductCard;