import "./App.css";
import Sidebar from "./components/sidebar.js";
import Loan from "./pages/loan";
import Liquidity from "./pages/liquidity";
import Createtoken from "./pages/createToken";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Loan />} /> */}
          <Route path="/" element={<LandingPage />} />
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

/* import "./App.css";
import Sidebar from "./components/sidebar.js";
import Loan from "./pages/loan";
import Liquidity from "./pages/liquidity";
import Createtoken from "./pages/createToken";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import LandingPage from "./pages/Landingpage";

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<LandingPage />} />
          <Route path="/loan" component={<Loan />} />
          <Route path="/liquidity" component={<Liquidity />} />
          <Route path="/createtoken" component={<Createtoken />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/* 
<Routes>
        <Route path="*" component={<landingPage />}>
          <Route path="/loan" component={<Loan />} />
          <Route path="/liquidity" component={<Liquidity />} />
          <Route path="/createtoken" component={<Createtoken />} />
        </Route>
      </Routes> */
