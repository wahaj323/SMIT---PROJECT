import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User, Home, Shield } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl text-gray-900">HackBoilerplate</span>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {authUser ? (
              <>
                {/* User info */}
                <div className="flex items-center gap-2">
                  {authUser.role === "admin" ? (
                    <Shield className="w-5 h-5 text-blue-600" />
                  ) : (
                    <User className="w-5 h-5 text-gray-600" />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {authUser.name}
                  </span>
                  {authUser.role === "admin" && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      Admin
                    </span>
                  )}
                </div>

                {/* Dashboard link */}
                <Link
                  to={authUser.role === "admin" ? "/admin" : "/dashboard"}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Dashboard
                </Link>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;