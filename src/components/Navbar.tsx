
import { Bell, Book, Calendar, GraduationCap, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">PathwayPro</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="flex items-center gap-1 text-sm font-medium">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link to="/roadmap" className="flex items-center gap-1 text-sm font-medium">
            <Book className="h-4 w-4" />
            Roadmaps
          </Link>
          <Link to="/consistency" className="flex items-center gap-1 text-sm font-medium">
            <Calendar className="h-4 w-4" />
            Consistency
          </Link>
          <Link to="/courses" className="flex items-center gap-1 text-sm font-medium">
            <GraduationCap className="h-4 w-4" />
            Courses
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
              SR
            </div>
            <span className="text-sm font-medium">Student</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
