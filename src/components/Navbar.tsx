
import { Bell, Book, Brain, Calendar, GraduationCap, Home, LogOut, MessageSquare, Newspaper, PenSquare, Settings, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">PathwayPro</span>
        </div>
        
        {user && (
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
            <Link to="/forum" className="flex items-center gap-1 text-sm font-medium">
              <MessageSquare className="h-4 w-4" />
              Forum
            </Link>
            <Link to="/mentorship" className="flex items-center gap-1 text-sm font-medium">
              <Users className="h-4 w-4" />
              Mentorship
            </Link>
            <Link to="/study-techniques" className="flex items-center gap-1 text-sm font-medium">
              <Brain className="h-4 w-4" />
              Study
            </Link>
            <Link to="/trends" className="flex items-center gap-1 text-sm font-medium">
              <Newspaper className="h-4 w-4" />
              Trends
            </Link>
            {isAdmin && (
              <Link to="/admin" className="flex items-center gap-1 text-sm font-medium text-primary">
                <Settings className="h-4 w-4" />
                Admin
              </Link>
            )}
          </nav>
        )}
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {user.avatar}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
