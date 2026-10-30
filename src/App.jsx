import Header from "./Header"
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App