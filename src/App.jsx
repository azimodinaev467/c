import { Routes, Route } from "react-router-dom";
import Home from "./pages/Hom";
import Servis from "./pages/Servis";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servis" element={<Servis />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;