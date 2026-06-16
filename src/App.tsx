import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import RoutesPage from "@/pages/Routes";
import RouteDetail from "@/pages/RouteDetail";
import Checkup from "@/pages/Checkup";
import TCM from "@/pages/TCM";
import About from "@/pages/About";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function App() {
  return (
    <Router basename="/yujian-wellness">
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/routes/:id" element={<RouteDetail />} />
            <Route path="/checkup" element={<Checkup />} />
            <Route path="/tcm" element={<TCM />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </Router>
  );
}
