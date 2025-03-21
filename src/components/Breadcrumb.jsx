import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    if (pathnames.length === 0) return null;

    return (
        <nav className="bg-gray-50 dark:bg-gray-800 py-2 px-4 flex justify-center">
            <ul className="flex space-x-2 text-red-600 dark:text-red-400 font-semibold font-sans">
                <li>
                    <Link to="/" className="hover:underline">
                        Anasayfa
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    return (
                        <li key={to} className="flex items-center">
                            <span className="mx-2">/</span>
                            <Link to={to} className="hover:underline capitalize">
                                {decodeURIComponent(value)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;