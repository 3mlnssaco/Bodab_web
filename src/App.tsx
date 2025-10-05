import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BodabPage from "./pages/BodabPage";
import XRPLPage from "./pages/XRPLPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodab" element={<BodabPage />} />
      <Route path="/xrpl" element={<XRPLPage />} />
    </Routes>
  );
}

export default App;
