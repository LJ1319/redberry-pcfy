import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import InfoPage from "./pages/InfoPage";

import EmployeeInfo from "./components/InfoPage/EmployeeInfo";
import LaptopInfo from "./components/InfoPage/LaptopInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="add-info" element={<InfoPage />} >
        <Route path="employee-info" element={<EmployeeInfo />} />
        <Route path="laptop-info" element={<LaptopInfo />} />
      </Route>

    </Routes >
  );
};

export default App;
