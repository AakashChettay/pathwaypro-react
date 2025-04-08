
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
