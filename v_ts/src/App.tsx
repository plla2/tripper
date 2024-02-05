import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
