// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const {pathname}= useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
    return null;
}