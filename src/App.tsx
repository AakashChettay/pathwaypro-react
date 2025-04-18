
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import RoadmapPage from "./pages/RoadmapPage";
import ConsistencyPage from "./pages/ConsistencyPage";
import CoursesPage from "./pages/CoursesPage";
import PlacementPage from "./pages/PlacementPage";
import ForumPage from "./pages/ForumPage";
import MentorshipPage from "./pages/MentorshipPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import BlogPage from "./pages/BlogPage";
import StudyTechniquesPage from "./pages/StudyTechniquesPage";
import TrendsPage from "./pages/TrendsPage";
import PersonalizedLearningPage from "./pages/PersonalizedLearningPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import SystemSettings from "./pages/admin/SystemSettings";
import NotFound from "./pages/NotFound";
import SkillsPage from "./pages/SkillsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public route for login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected routes for standard users */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="roadmap" element={<RoadmapPage />} />
                <Route path="consistency" element={<ConsistencyPage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="placement" element={<PlacementPage />} />
                <Route path="forum" element={<ForumPage />} />
                <Route path="mentorship" element={<MentorshipPage />} />
                <Route path="leaderboard" element={<LeaderboardPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="study-techniques" element={<StudyTechniquesPage />} />
                <Route path="trends" element={<TrendsPage />} />
                <Route path="personalized-learning" element={<PersonalizedLearningPage />} />
                <Route path="skills" element={<SkillsPage />} />
              </Route>
            </Route>

            {/* Admin-only routes */}
            <Route element={<ProtectedRoute requireAdmin={true} />}>
              <Route path="/admin" element={<Layout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="settings" element={<SystemSettings />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
