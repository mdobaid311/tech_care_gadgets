import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AppLayout from "./components/Layouts/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
