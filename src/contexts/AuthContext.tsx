
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Define user types and roles
export type UserRole = "admin" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Static credentials for demo
const DEMO_USERS = {
  admin: {
    id: "admin-001",
    email: "admin@pathwaypro.edu",
    password: "admin123",
    name: "Admin User",
    role: "admin" as UserRole,
    avatar: "A",
  },
  student: {
    id: "student-001",
    email: "student@pathwaypro.edu",
    password: "student123",
    name: "Student User", 
    role: "student" as UserRole,
    avatar: "S",
  }
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  
  // Check if user is stored in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";

  const login = async (email: string, password: string): Promise<boolean> => {
    // Check admin credentials
    if (email === DEMO_USERS.admin.email && password === DEMO_USERS.admin.password) {
      const adminUser = { ...DEMO_USERS.admin };
      delete (adminUser as any).password;
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      toast.success("Logged in as Administrator");
      return true;
    }
    
    // Check student credentials
    if (email === DEMO_USERS.student.email && password === DEMO_USERS.student.password) {
      const studentUser = { ...DEMO_USERS.student };
      delete (studentUser as any).password;
      setUser(studentUser);
      localStorage.setItem("user", JSON.stringify(studentUser));
      toast.success("Logged in as Student");
      return true;
    }
    
    toast.error("Invalid credentials");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
