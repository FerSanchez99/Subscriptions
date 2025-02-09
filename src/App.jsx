import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Subscriptions from "./pages/subscriptions";
import Payment from "./pages/payment_:(";
import Login from "./pages/login";
import Success from "./pages/success";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Subscriptions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}