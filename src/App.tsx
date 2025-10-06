import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BodabPage from "./pages/BodabPage";
import XRPLPage from "./pages/XRPLPage";
import UniqDataPage from "./pages/UniqDataPage";
import WoorijibPage from "./pages/WoorijibPage";
import EoullimPage from "./pages/EoullimPage";
import NestPage from "./pages/NestPage";
import QtechPage from "./pages/QtechPage";
import ScaleupPage from "./pages/ScaleupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodab" element={<BodabPage />} />
      <Route path="/xrpl" element={<XRPLPage />} />
      <Route path="/uniqdata" element={<UniqDataPage />} />
      <Route path="/woorijib" element={<WoorijibPage />} />
      <Route path="/eoullim" element={<EoullimPage />} />
      <Route path="/nest" element={<NestPage />} />
      <Route path="/qtech" element={<QtechPage />} />
      <Route path="/scaleup" element={<ScaleupPage />} />
    </Routes>
  );
}

export default App;
