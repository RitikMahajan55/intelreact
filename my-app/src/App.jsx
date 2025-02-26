import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Nav/Navbar"; // Ensure Navbar exists
import FooterPage from "./component/footer/FooterPage";
import Section1 from "./pages/landingpage/Section1";
import Search from "./pages/Ourserviceslandingpage/search/";// Fixed path
import Carrier from "./pages/Carrierlandingpage/Carrier";
import JobDetailPage from "./pages/Description_landingpage/jobDetailPage";
import JobBoard from "./carrier/info2/CarrierInfo2";

import ServicePage from "./pages/OurservicesLandingpage/ServicePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/ourservice" element={<Search />} />
        <Route path="/careers" element={<Carrier />} />
        <Route path="/job" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
        
        <Route path="/services/:serviceName" element={<ServicePage />}/>
      </Routes>
      <FooterPage />
    </Router>
  );
}

export default App;
