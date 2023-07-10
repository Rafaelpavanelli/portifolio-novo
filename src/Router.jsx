import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Index";
import { ThemesProvider } from "./Context.site";
import { NotFound } from "./Pages/NotFound/NotFound.jsx";
import { Layout } from "./Pages/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemesProvider>
    </BrowserRouter>
  );
};
