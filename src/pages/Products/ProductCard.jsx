import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-xl shadow-md bg-white dark:bg-black p-6 text-center cursor-pointer h-96 flex flex-col">
            <div className="h-60 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain rounded-md"
                />
            </div>
            <div className="flex flex-col justify-between">
                <h3 className="mt-4 text-lg font-semibold font-sans">{product.title}</h3>
                <h3 className="mt-4 text-lg font-semibold font-sans">{product.description}</h3>
            </div>
        </div>
    );
};

export default ProductCard;