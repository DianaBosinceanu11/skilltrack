import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import List from "./pages/List";
import New from "./pages/New";
import About from "./pages/About";
import Item from "./pages/Item";
import Edit from "./pages/Edit";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-2xl mx-auto p-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/new" element={<New />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/item/:id/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
