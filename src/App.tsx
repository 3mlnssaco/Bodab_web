import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BodabPage from "./pages/BodabPage";
import XRPLPage from "./pages/XRPLPage";
import UniqDataPage from "./pages/UniqDataPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodab" element={<BodabPage />} />
      <Route path="/xrpl" element={<XRPLPage />} />
      <Route path="/uniqdata" element={<UniqDataPage />} />
    </Routes>
  );
}

export default App;
