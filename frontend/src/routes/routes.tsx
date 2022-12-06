import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
};