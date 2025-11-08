import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import List from "./pages/List";
import New from "./pages/New";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-2xl mx-auto p-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
