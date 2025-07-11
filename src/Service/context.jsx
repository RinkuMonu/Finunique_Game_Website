import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ContextData = createContext();

export const ContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const partname = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [seo, setSeo] = useState({});
  const [allSeoData, setAllSeoData] = useState([]);

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await fetch(
          "https://cms.sevenunique.com/apis/SEO/get-seo-content.php?website_id=6"
        );
        const json = await res.json();
        setAllSeoData(json?.data || []);
      } catch (err) {
        console.error("SEO Fetch Error:", err);
      }
    };
    fetchSeo();
  }, [partname]);

  useEffect(() => {
    const normalizeUrl = (url) => url?.replace(/\/+$/, "").toLowerCase();
    const fullUrl = normalizeUrl(
      window.location.origin + window.location.pathname
    );
    // const fullUrl = "https://rummy-eight.vercel.app";

    const matched = allSeoData.find(
      (item) => normalizeUrl(item?.page_slug) === fullUrl
    );

    if (matched) setSeo(matched);
    else setSeo({});
  }, [allSeoData, partname]);

  useEffect(() => {
    scrollToTop();
  }, [partname]);
  
  const downLoadApk = () => {
    const link = document.createElement("a");
    link.href = "/finUnique-rummy.apk";
    link.download = "finUnique-rummy.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ContextData.Provider value={{ scrollToTop, token, seo, downLoadApk }}>
      {children}
    </ContextData.Provider>
  );
};
