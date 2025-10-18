import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/check");
      set({ authUser: res.data.user });
    } catch (error) {
      set({ authUser: null });
      console.log("Auth check failed:", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/register", data);
      toast.success(res.data.message || "Account created successfully");
      return true; // Signal success to redirect to login
    } catch (error) {
      const message = error.response?.data?.message || "Signup failed";
      toast.error(message);
      return false;
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
      return false;
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      const message = error.response?.data?.message || "Logout failed";
      toast.error(message);
    }
  },
}));