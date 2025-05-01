import "./App.css";
import Login from  "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./components/Profile";
 

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
