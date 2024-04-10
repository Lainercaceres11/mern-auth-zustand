import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";

const App = () => {

  const isAuth = useAuthStore(state => state.isAllowed)

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default App;
