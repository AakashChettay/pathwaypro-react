
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Award, Bell, Calendar, CheckCircle, Clock, Fire, Info, Trophy } from "lucide-react";
import StreakCalendar from "@/components/StreakCalendar";

const ConsistencyPage = () => {
  // Mock state for tasks
  const [dailyTasks, setDailyTasks] = useState([
    { id: 1, title: "Solve 2 coding problems", completed: false },
    { id: 2, title: "Read one academic paper", completed: true },
    { id: 3, title: "Complete one lesson on React", completed: false },
    { id: 4, title: "Update learning notes", completed: true },
  ]);

  // Mock streak data
  const weeklyStreakData = [
    true, true, true, true, false, true, true,
    true, true, false, true, true, true, false
  ];
  
  const monthlyStreakData = [
    true, true, true, true, false, true, true,
    true, true, false, true, true, true, false,
    true, true, true, false, true, true, false,
    true, false, true, true, true, true, true,
    true, true, true
  ];

  // Toggle task completion
  const toggleTaskCompletion = (taskId: number) => {
    setDailyTasks(dailyTasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Consistency Tracker</h1>
        <p className="text-muted-foreground">
          Build a daily learning habit and track your consistency
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle>Your Streak</CardTitle>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Bell className="h-4 w-4" />
                  Set Reminder
                </Button>
              </div>
              <CardDescription>Keep your learning streak alive by completing daily tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="weekly">
                <TabsList className="mb-4">
                  <TabsTrigger value="weekly">Weekly View</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly View</TabsTrigger>
                </TabsList>
                
                <TabsContent value="weekly">
                  <StreakCalendar 
                    currentStreak={7} 
                    longestStreak={14} 
                    streakDays={weeklyStreakData} 
                  />
                </TabsContent>
                
                <TabsContent value="monthly">
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-1.5 mb-2">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                        <div key={i} className="text-xs text-center font-medium text-muted-foreground">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1.5">
                      {monthlyStreakData.map((isActive, i) => (
                        <div 
                          key={i} 
                          className={`streak-dot ${isActive ? "streak-dot-active" : "streak-dot-inactive"}`}
                        >
                          {isActive && "✓"}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-sm mt-4">
                      <div>
                        <span className="text-muted-foreground">Current streak: </span>
                        <span className="font-medium">7 days</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Active days this month: </span>
                        <span className="font-medium">24/30</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <CardTitle>Today's Tasks</CardTitle>
              </div>
              <CardDescription>Complete these tasks to maintain your streak</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {dailyTasks.map((task) => (
                <div 
                  key={task.id} 
                  className="flex items-center justify-between p-3 border rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <Button 
                      variant={task.completed ? "default" : "outline"} 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => toggleTaskCompletion(task.id)}
                    >
                      {task.completed && <CheckCircle className="h-4 w-4" />}
                    </Button>
                    <span className={task.completed ? "line-through text-muted-foreground" : ""}>{task.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              ))}
              
              <Button className="w-full" disabled={dailyTasks.every(task => task.completed)}>
                Mark All Complete
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>Upcoming Study Plan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { day: "Tomorrow", tasks: ["Solve 3 coding problems", "Read chapter on Networks"] },
                  { day: "Wednesday", tasks: ["Complete database assignment", "Watch lecture on algorithms"] },
                  { day: "Thursday", tasks: ["Work on mini-project", "Prepare for quiz"] },
                ].map((plan, i) => (
                  <div key={i} className="p-3 border rounded-md">
                    <h4 className="font-medium text-sm">{plan.day}</h4>
                    <ul className="mt-1 space-y-1">
                      {plan.tasks.map((task, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="inline-block h-1 w-1 rounded-full bg-primary"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Fire className="h-5 w-5 text-primary" />
                <CardTitle>Streak Stats</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">Longest Streak</span>
                  </div>
                  <span className="font-bold">14 days</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">Current Streak</span>
                  </div>
                  <span className="font-bold">7 days</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Total Active Days</span>
                  </div>
                  <span className="font-bold">68 days</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium">Tasks Completed</span>
                  </div>
                  <span className="font-bold">247</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <CardTitle>Top Performers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Aditya S.", streak: 45, avatar: "AS" },
                  { name: "Priya M.", streak: 38, avatar: "PM" },
                  { name: "Raj K.", streak: 32, avatar: "RK" },
                  { name: "Sunita P.", streak: 29, avatar: "SP" },
                  { name: "Vikram T.", streak: 25, avatar: "VT" },
                ].map((student, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-muted">
                    <div className="flex items-center gap-2">
                      <div className={`h-8 w-8 rounded-full bg-${["blue", "green", "purple", "pink", "yellow"][i % 5]}-100 text-${["blue", "green", "purple", "pink", "yellow"][i % 5]}-800 flex items-center justify-center text-sm font-medium`}>
                        {student.avatar}
                      </div>
                      <span className="font-medium text-sm">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Fire className="h-4 w-4 text-orange-500" />
                      <span>{student.streak} days</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Streak Tips</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 text-sm space-y-1 mt-2">
                <li>Set a specific time each day for learning</li>
                <li>Start with small, achievable tasks</li>
                <li>Use the 'Don't Break the Chain' method</li>
                <li>Find an accountability partner</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default ConsistencyPage;
