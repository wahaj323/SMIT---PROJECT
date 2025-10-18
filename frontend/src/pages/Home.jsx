import { Link } from "react-router-dom";
import { Zap, Shield, Code } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hackathon Boilerplate
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete authentication system ready for your next hackathon project
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 border border-blue-600 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Setup
              </h3>
              <p className="text-gray-600">
                Complete authentication system ready to use. Just clone and start building your features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure
              </h3>
              <p className="text-gray-600">
                JWT authentication with httpOnly cookies. Password hashing with bcrypt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Role-Based Access
              </h3>
              <p className="text-gray-600">
                Built-in user and admin roles. Separate dashboards for different user types.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;