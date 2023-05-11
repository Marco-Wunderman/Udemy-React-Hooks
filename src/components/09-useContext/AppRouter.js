import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
