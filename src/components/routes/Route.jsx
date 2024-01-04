import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/Login";
import DashBoard from "../dashBoard/DashBoard";
import Statistics from "../Statistics/Statistics";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/dashboard" Component={DashBoard} />
        <Route path="/statistics" Component={Statistics} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
