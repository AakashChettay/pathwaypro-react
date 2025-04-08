
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Flame, Medal, Star, Trophy, TrendingUp, Users, Calendar, Target, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Mock data for leaderboard
const students = [
  {
    id: 1,
    name: "Vikram Singh",
    avatar: "/placeholder.svg",
    year: "3rd Year",
    points: 1280,
    streak: 42,
    badges: ["DSA Master", "React Pro", "Consistency Champion"],
    position: 1,
    progress: 85,
    previousPosition: 2,
  },
  {
    id: 2,
    name: "Ananya Reddy",
    avatar: "/placeholder.svg",
    year: "4th Year",
    points: 1145,
    streak: 38,
    badges: ["Interview Expert", "Problem Solver", "Top Contributor"],
    position: 2,
    progress: 78,
    previousPosition: 1,
  },
  {
    id: 3,
    name: "Rohit Sharma",
    avatar: "/placeholder.svg",
    year: "2nd Year",
    points: 970,
    streak: 25,
    badges: ["Quick Learner", "Top Contributor"],
    position: 3,
    progress: 72,
    previousPosition: 5,
  },
  {
    id: 4,
    name: "Priya Kumar",
    avatar: "/placeholder.svg",
    year: "3rd Year",
    points: 930,
    streak: 35,
    badges: ["Machine Learning Enthusiast", "Roadmap Completer"],
    position: 4,
    progress: 68,
    previousPosition: 3,
  },
  {
    id: 5,
    name: "Amit Patel",
    avatar: "/placeholder.svg",
    year: "1st Year",
    points: 820,
    streak: 20,
    badges: ["Rising Star"],
    position: 5,
    progress: 64,
    previousPosition: 7,
  },
  {
    id: 6,
    name: "Sanjana Gupta",
    avatar: "/placeholder.svg",
    year: "2nd Year",
    points: 785,
    streak: 18,
    badges: ["Web Dev Wizard"],
    position: 6,
    progress: 61,
    previousPosition: 4,
  },
  {
    id: 7,
    name: "Karthik R",
    avatar: "/placeholder.svg",
    year: "4th Year",
    points: 750,
    streak: 15,
    badges: ["Placement Pro"],
    position: 7,
    progress: 58,
    previousPosition: 6,
  },
  {
    id: 8,
    name: "Deepika Nair",
    avatar: "/placeholder.svg",
    year: "1st Year",
    points: 680,
    streak: 22,
    badges: ["Quick Starter"],
    position: 8,
    progress: 55,
    previousPosition: 9,
  },
  {
    id: 9,
    name: "Rajiv Malhotra",
    avatar: "/placeholder.svg",
    year: "3rd Year",
    points: 650,
    streak: 14,
    badges: ["Comeback King"],
    position: 9,
    progress: 52,
    previousPosition: 12,
  },
  {
    id: 10,
    name: "Meera Shah",
    avatar: "/placeholder.svg",
    year: "2nd Year",
    points: 610,
    streak: 12,
    badges: ["Consistent Learner"],
    position: 10,
    progress: 48,
    previousPosition: 8,
  }
];

// Mock data for achievements
const achievements = [
  {
    id: 1,
    name: "Streak Master",
    description: "Maintain a 30-day study streak",
    icon: <Flame className="h-8 w-8 text-red-500" />,
    progress: 87,
    unlocked: true
  },
  {
    id: 2,
    name: "Roadmap Completer",
    description: "Complete all items in a semester roadmap",
    icon: <Target className="h-8 w-8 text-purple-500" />,
    progress: 65,
    unlocked: false
  },
  {
    id: 3,
    name: "Top Contributor",
    description: "Answer 50 questions in the community forum",
    icon: <Users className="h-8 w-8 text-blue-500" />,
    progress: 42,
    unlocked: false
  },
  {
    id: 4,
    name: "Course Champion",
    description: "Complete 10 courses from the course library",
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    progress: 90,
    unlocked: true
  },
  {
    id: 5,
    name: "Consistency King",
    description: "Log in for 100 consecutive days",
    icon: <Calendar className="h-8 w-8 text-green-500" />,
    progress: 72,
    unlocked: false
  },
  {
    id: 6,
    name: "Rising Star",
    description: "Improve your ranking by 10 positions in a month",
    icon: <TrendingUp className="h-8 w-8 text-indigo-500" />,
    progress: 100,
    unlocked: true
  }
];

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState("weekly");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leaderboard & Achievements</h1>
        <p className="text-muted-foreground mt-1">
          See where you stand and track your progress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Leaderboard Rankings
            </CardTitle>
            <CardDescription>
              Based on points earned from activities, courses, and consistency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="weekly" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger 
                  value="weekly"
                  onClick={() => setActiveTab("weekly")}
                >
                  Weekly
                </TabsTrigger>
                <TabsTrigger 
                  value="monthly"
                  onClick={() => setActiveTab("monthly")}
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger 
                  value="all-time"
                  onClick={() => setActiveTab("all-time")}
                >
                  All Time
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="weekly" className="space-y-4">
                {students.slice(0, 3).map((student) => (
                  <div key={student.id} className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-background">
                      <Trophy className={`h-5 w-5 ${
                        student.position === 1 ? 'text-yellow-500' : 
                        student.position === 2 ? 'text-gray-400' : 
                        'text-amber-800'
                      }`} />
                    </div>
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{student.name}</span>
                        <Badge variant="outline">{student.year}</Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{student.points} points</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="h-4 w-4 text-red-500" />
                          <span>{student.streak} day streak</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">#{student.position}</div>
                      <div className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                        {student.previousPosition > student.position ? (
                          <>
                            <TrendingUp className="h-3 w-3 text-green-500" />
                            <span className="text-green-500">+{student.previousPosition - student.position}</span>
                          </>
                        ) : student.previousPosition < student.position ? (
                          <>
                            <TrendingDown className="h-3 w-3 text-red-500" />
                            <span className="text-red-500">-{student.position - student.previousPosition}</span>
                          </>
                        ) : (
                          <span>No change</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="space-y-2 mt-6">
                  {students.slice(3).map((student) => (
                    <div key={student.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                      <div className="text-muted-foreground font-medium w-8 text-center">
                        #{student.position}
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground">{student.year}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{student.points}</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        {student.previousPosition > student.position ? (
                          <>
                            <TrendingUp className="h-3 w-3 text-green-500" />
                            <span className="text-green-500">+{student.previousPosition - student.position}</span>
                          </>
                        ) : student.previousPosition < student.position ? (
                          <>
                            <TrendingDown className="h-3 w-3 text-red-500" />
                            <span className="text-red-500">-{student.position - student.previousPosition}</span>
                          </>
                        ) : (
                          <span>-</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="monthly">
                <div className="h-40 flex items-center justify-center">
                  <p className="text-muted-foreground">Monthly leaderboard data will appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="all-time">
                <div className="h-40 flex items-center justify-center">
                  <p className="text-muted-foreground">All-time leaderboard data will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-primary" />
              Your Stats
            </CardTitle>
            <CardDescription>
              Your current ranking and progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-flex rounded-full p-4 bg-primary/10">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src="/placeholder.svg" alt="Your avatar" />
                  <AvatarFallback>YOU</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold mt-2">Your Profile</h3>
              <p className="text-muted-foreground text-sm">Sign in to see your stats</p>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full">Sign In</Button>
              <p className="text-xs text-center text-muted-foreground">
                Track your progress and compete with your peers
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={`${achievement.unlocked ? 'border-primary/50' : ''}`}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`rounded-full p-4 ${achievement.unlocked ? 'bg-primary/20' : 'bg-muted'}`}>
                  {achievement.icon}
                </div>
                <h3 className="font-bold mt-4">{achievement.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                <div className="w-full mt-4 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} className="h-2" />
                </div>
                <Badge 
                  variant={achievement.unlocked ? "default" : "outline"} 
                  className="mt-4"
                >
                  {achievement.unlocked ? "Unlocked" : "In Progress"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add the TrendingDown icon component to avoid TS errors
const TrendingDown = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

export default LeaderboardPage;
