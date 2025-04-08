
import { 
  BarChart3, 
  BookOpen, 
  Brain,
  Briefcase,
  Calendar, 
  Code, 
  GraduationCap, 
  Home, 
  Lightbulb,
  MessageSquare, 
  MousePointerClick,
  Newspaper,
  PenSquare,
  Settings,
  ShieldCheck,
  TrendingUp, 
  Trophy,
  Users 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Sidebar = () => {
  const { isAdmin } = useAuth();
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r p-4 space-y-8">
      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Dashboard
        </h3>
        <nav className="flex flex-col space-y-1">
          <Link 
            to="/" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link 
            to="/roadmap" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <TrendingUp className="h-4 w-4" />
            Roadmap
          </Link>
          <Link 
            to="/consistency" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Calendar className="h-4 w-4" />
            Consistency Tracker
          </Link>
        </nav>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Learning
        </h3>
        <nav className="flex flex-col space-y-1">
          <Link 
            to="/courses" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <BookOpen className="h-4 w-4" />
            Courses
          </Link>
          <Link 
            to="/placement" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <GraduationCap className="h-4 w-4" />
            Placement Prep
          </Link>
          <Link 
            to="/skills" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Code className="h-4 w-4" />
            Skills
          </Link>
          <Link 
            to="/study-techniques" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Brain className="h-4 w-4" />
            Study Techniques
          </Link>
          <Link 
            to="/personalized-learning" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <MousePointerClick className="h-4 w-4" />
            Personalized Learning
          </Link>
        </nav>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Community
        </h3>
        <nav className="flex flex-col space-y-1">
          <Link 
            to="/forum" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <MessageSquare className="h-4 w-4" />
            Q&A Forum
          </Link>
          <Link 
            to="/mentorship" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Users className="h-4 w-4" />
            Alumni Mentorship
          </Link>
          <Link 
            to="/leaderboard"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Trophy className="h-4 w-4" />
            Leaderboard
          </Link>
          <Link 
            to="/blog" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <PenSquare className="h-4 w-4" />
            Student Articles
          </Link>
        </nav>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Insights
        </h3>
        <nav className="flex flex-col space-y-1">
          <Link 
            to="/trends" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <Newspaper className="h-4 w-4" />
            Industry Trends
          </Link>
          <Link 
            to="/stats" 
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            <BarChart3 className="h-4 w-4" />
            Statistics
          </Link>
        </nav>
      </div>
      
      {isAdmin && (
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Administration
          </h3>
          <nav className="flex flex-col space-y-1">
            <Link 
              to="/admin" 
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10"
            >
              <ShieldCheck className="h-4 w-4" />
              Admin Dashboard
            </Link>
            <Link 
              to="/admin/users" 
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Users className="h-4 w-4" />
              User Management
            </Link>
            <Link 
              to="/admin/settings" 
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <Settings className="h-4 w-4" />
              System Settings
            </Link>
          </nav>
        </div>
      )}
      
      <div className="mt-auto pt-4 border-t">
        <div className="rounded-md bg-muted p-3">
          <h3 className="font-semibold text-sm">Need Help?</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Contact your department coordinator or reach out to us at support@pathwaypro.edu
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
