import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};