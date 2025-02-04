import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Subscriptions from "./pages/subscriptions";
import Payment from "./pages/payment";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Subscriptions />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </Router>
    </>
  );
}