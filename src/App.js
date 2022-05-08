import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Components/dashboard";
import Info from "./Components/Info";
import Travel from "./Components/addTravelinfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editProfile" element={<Info />} />
          <Route path="/addTravelDetail" element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
