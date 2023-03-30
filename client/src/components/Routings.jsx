import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import NotFound from "./notFound/NotFound";
import Profile from './profile/Profile';

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {!localStorage.getItem("user") ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : <Route path="/profile" element={<Profile />} />}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routings;
