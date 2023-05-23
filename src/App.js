// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import DonationsChoiceForm from "./Pages/DonationsChoiceForm";
import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home";
import DonationsMoney from "./Pages/DonationsMoney";
import DonationsService from "./Pages/DonationsService";
import HelpfulCompanies from "./Pages/HelpfulCompanies";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donations" element={<DonationsChoiceForm />} />
            <Route path="/donations/money" element={<DonationsMoney/>} />
            <Route path="/donations/service" element={<DonationsService/>} />
            <Route path="/helpfulcompanies" element={<HelpfulCompanies/>} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

