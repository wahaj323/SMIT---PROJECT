import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route 
          path="/" 
          element={authUser ? <Navigate to={authUser.role === "admin" ? "/admin" : "/dashboard"} /> : <Home />} 
        />
        <Route 
          path="/login" 
          element={!authUser ? <Login /> : <Navigate to={authUser.role === "admin" ? "/admin" : "/dashboard"} />} 
        />
        <Route 
          path="/register" 
          element={!authUser ? <Register /> : <Navigate to={authUser.role === "admin" ? "/admin" : "/dashboard"} />} 
        />

        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={authUser && authUser.role === "user" ? <UserDashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/admin" 
          element={authUser && authUser.role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />} 
        />
      </Routes>

      <Toaster position="top-center" />
    </div>
  );
}

export default App;