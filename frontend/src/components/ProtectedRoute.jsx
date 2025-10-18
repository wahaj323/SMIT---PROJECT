import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { authUser } = useAuthStore();

  if (!authUser) return <Navigate to="/login" replace />;
  if (adminOnly && authUser.role !== "admin") return <Navigate to="/" replace />;

  return children;
}
