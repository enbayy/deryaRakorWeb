import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Breadcrumb = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    if (pathnames.length === 0) return null;

    return (
        <nav className="bg-gray-50 dark:bg-gray-900 py-2 px-4 flex justify-center">
            <ul className="flex space-x-2 text-[#D22128] font-semibold font-sans">
                <li>
                    <Link to="/" className="hover:underline">
                        {t('home')}
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    return (
                        <li key={to} className="flex items-center">
                            <span className="mx-2">/</span>
                            <Link to={to} className="hover:underline capitalize font-sans">
                                {t(decodeURIComponent(value))}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;