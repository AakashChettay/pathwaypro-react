
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressRing from "@/components/ProgressChart";
import RoadmapItem from "@/components/RoadmapItem";
import StreakCalendar from "@/components/StreakCalendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BarChart3, BookOpen, BrainCircuit, Calendar, Code, GraduationCap, Info } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // State to track completed roadmap items
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({
    "dsa-basics": true,
    "html-css": true,
    "javascript-basics": false,
    "react-intro": false,
  });

  // Toggle completion status
  const toggleCompletion = (itemId: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Mock streak data
  const streakDays = [
    true, true, true, true, false, true, true,
    true, true, false, true, true, true, false
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Student</h1>
          <p className="text-muted-foreground">
            Your personalized learning dashboard for CSE at GPREC
          </p>
        </div>
        <Alert className="max-w-md">
          <Info className="h-4 w-4" />
          <AlertTitle>Placement Season Approaching!</AlertTitle>
          <AlertDescription>
            Complete your roadmap items to be fully prepared for the upcoming placement season.
          </AlertDescription>
        </Alert>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>Your Progress</CardTitle>
            </div>
            <CardDescription>
              Current semester: 4th Semester (2nd Year)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center">
                <ProgressRing 
                  progress={65} 
                  label="Overall Progress" 
                />
              </div>
              <div className="flex flex-col items-center">
                <ProgressRing 
                  progress={72} 
                  label="Academic Skills" 
                  color="stroke-blue-500"
                />
              </div>
              <div className="flex flex-col items-center">
                <ProgressRing 
                  progress={58} 
                  label="Placement Readiness" 
                  color="stroke-purple-500"
                />
              </div>
            </div>
            
            <h3 className="font-semibold text-sm mb-3">Upcoming Tasks</h3>
            <div className="space-y-1">
              <RoadmapItem
                title="Learn JavaScript Basics"
                description="Complete at least one introductory course on JavaScript fundamentals"
                completed={completedItems["javascript-basics"]}
                link="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
                onMarkComplete={() => toggleCompletion("javascript-basics")}
              />
              <RoadmapItem
                title="Introduction to React"
                description="Learn the basics of React component architecture and state management"
                completed={completedItems["react-intro"]}
                link="https://react.dev/learn"
                onMarkComplete={() => toggleCompletion("react-intro")}
              />
            </div>
            
            <div className="mt-4 text-center">
              <Link to="/roadmap" className="text-sm text-primary hover:underline">
                View Full Roadmap →
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <StreakCalendar 
            currentStreak={7} 
            longestStreak={14} 
            streakDays={streakDays} 
          />
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <CardTitle>Quick Stats</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Courses Completed</span>
                  </div>
                  <span className="font-semibold">8/12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Active Days</span>
                  </div>
                  <span className="font-semibold">24/30</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Coding Problems</span>
                  </div>
                  <span className="font-semibold">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Skills Acquired</span>
                  </div>
                  <span className="font-semibold">6</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Recommended Courses</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  title: "Data Structures and Algorithms",
                  provider: "GeeksforGeeks",
                  link: "https://www.geeksforgeeks.org/data-structures/"
                },
                {
                  title: "Frontend Web Development",
                  provider: "freeCodeCamp",
                  link: "https://www.freecodecamp.org/learn/responsive-web-design/"
                },
                {
                  title: "Database Management Systems",
                  provider: "Coursera",
                  link: "https://www.coursera.org/specializations/database-systems"
                }
              ].map((course, i) => (
                <div key={i} className="flex justify-between items-center p-2 rounded hover:bg-muted">
                  <div>
                    <h4 className="font-medium text-sm">{course.title}</h4>
                    <p className="text-xs text-muted-foreground">{course.provider}</p>
                  </div>
                  <a 
                    href={course.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    Explore →
                  </a>
                </div>
              ))}
              <div className="mt-2 text-center">
                <Link to="/courses" className="text-sm text-primary hover:underline">
                  View All Courses →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <CardTitle>Placement Readiness</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Top Skills to Focus On</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { skill: "Problem Solving", progress: 65 },
                    { skill: "OOP Concepts", progress: 78 },
                    { skill: "Database Design", progress: 45 },
                    { skill: "System Design", progress: 30 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <span className="text-xs font-medium">{item.skill}</span>
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Target Companies Hiring This Year</h4>
                <div className="flex flex-wrap gap-2">
                  {["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Microsoft"].map((company) => (
                    <div key={company} className="px-2 py-1 bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-50 rounded text-xs">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-2 text-center">
                <Link to="/placement" className="text-sm text-primary hover:underline">
                  View Placement Resources →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Import this icon here to fix the TypeScript error
const TrendingUp = GraduationCap;

export default Dashboard;
