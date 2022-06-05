import "./App.css";
import Sidebar from "./components/sidebar.js";
import Loan from "./pages/loan";
import Liquidity from "./pages/liquidity";
import Createtoken from "./pages/createToken";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Loan />} /> */}
          <Route path="/loan" element={<Loan />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/Createtoken" element={<Createtoken />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
