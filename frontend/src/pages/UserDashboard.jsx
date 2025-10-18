import { useAuthStore } from "../store/useAuthStore";
import { User, Mail, Calendar, Shield } from "lucide-react";

const UserDashboard = () => {
  const { authUser } = useAuthStore();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {authUser?.name}!</h1>
        <p className="text-blue-100">This is your user dashboard</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="font-medium text-gray-900">{authUser?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900">{authUser?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Role</p>
              <p className="font-medium text-gray-900 capitalize">{authUser?.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">User ID</p>
              <p className="font-medium text-gray-900">{authUser?._id}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">0</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Start building your first project</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">0</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">No tasks yet</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">0</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Complete tasks to earn achievements</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;