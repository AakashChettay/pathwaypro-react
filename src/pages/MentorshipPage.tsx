
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Users, Briefcase, Award, Clock, Video, MessageSquare, Calendar as CalendarIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// Mock data for mentors
const mentors = [
  {
    id: 1,
    name: "Arjun Mehta",
    avatar: "/placeholder.svg",
    role: "Software Engineer",
    company: "Google",
    graduationYear: "2020",
    expertise: ["DSA", "System Design", "Interview Prep"],
    rating: 4.9,
    reviews: 28,
    available: true,
    about: "I specialize in helping students crack technical interviews at FAANG companies. My mentoring approach focuses on practical problem-solving and system design concepts that actually matter in real interviews."
  },
  {
    id: 2,
    name: "Neha Sharma",
    avatar: "/placeholder.svg",
    role: "ML Engineer",
    company: "Microsoft",
    graduationYear: "2019",
    expertise: ["Machine Learning", "Python", "AI"],
    rating: 4.8,
    reviews: 23,
    available: false,
    about: "Passionate about helping students navigate the rapidly evolving field of ML and AI. I can guide you through building projects that stand out and preparing for ML-specific interviews."
  },
  {
    id: 3,
    name: "Rahul Patel",
    avatar: "/placeholder.svg",
    role: "Frontend Developer",
    company: "Adobe",
    graduationYear: "2021",
    expertise: ["React", "JavaScript", "UI/UX"],
    rating: 4.7,
    reviews: 19,
    available: true,
    about: "I help students master modern frontend development. From basic concepts to advanced React patterns, I'll help you build a portfolio that gets you noticed by recruiters."
  },
  {
    id: 4,
    name: "Kavita Reddy",
    avatar: "/placeholder.svg",
    role: "Product Manager",
    company: "Amazon",
    graduationYear: "2018",
    expertise: ["Product Management", "Business Strategy", "Leadership"],
    rating: 4.9,
    reviews: 31,
    available: true,
    about: "Former software engineer turned PM. I help students understand the non-technical aspects of tech careers and how to position themselves for PM roles straight out of college."
  }
];

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: 1,
    title: "Mastering System Design Interviews",
    mentor: "Arjun Mehta",
    mentorAvatar: "/placeholder.svg",
    date: "April 12, 2025",
    time: "4:00 PM - 5:30 PM",
    attendees: 42,
    type: "Webinar",
    description: "Learn the key principles of system design and how to approach common interview problems. We'll cover scaling, caching, load balancing, and more."
  },
  {
    id: 2,
    title: "Resume Review Workshop",
    mentor: "Kavita Reddy",
    mentorAvatar: "/placeholder.svg",
    date: "April 15, 2025",
    time: "6:00 PM - 7:00 PM",
    attendees: 35,
    type: "Workshop",
    description: "Get personalized feedback on your resume and learn how to highlight your projects and skills to stand out to recruiters."
  }
];

const MentorshipPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Alumni Mentorship</h1>
        <p className="text-muted-foreground mt-1">
          Connect with and learn from successful alumni who've been in your shoes
        </p>
      </div>

      <Tabs defaultValue="mentors" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
          <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="my-mentors">My Mentors</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mentors" className="mt-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search mentors by name, expertise, company..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              Filter by Expertise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback className="text-lg">{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>{mentor.name}</CardTitle>
                        {mentor.available ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>
                        ) : (
                          <Badge variant="outline">Unavailable</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{mentor.role} at {mentor.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        <span>Class of {mentor.graduationYear}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm line-clamp-3">{mentor.about}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{mentor.rating} ({mentor.reviews} reviews)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <Button variant="outline" className="w-1/2">View Profile</Button>
                  <Button className="w-1/2">Request Session</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sessions" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center justify-center bg-muted p-4 rounded-lg min-w-32 text-center">
                      <CalendarIcon className="h-8 w-8 mb-2 text-primary" />
                      <div className="font-semibold">{session.date}</div>
                      <div className="text-sm text-muted-foreground">{session.time}</div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{session.type}</Badge>
                          <Badge variant="secondary">
                            <Users className="h-3 w-3 mr-1" />
                            {session.attendees} attending
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold">{session.title}</h3>
                        <div className="flex items-center mt-1">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={session.mentorAvatar} alt={session.mentor} />
                            <AvatarFallback>{session.mentor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{session.mentor}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{session.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button className="gap-2">
                          <Calendar className="h-4 w-4" />
                          Add to Calendar
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Video className="h-4 w-4" />
                          Join Session
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Past Recorded Sessions</CardTitle>
              <CardDescription>
                Access recordings of previous mentorship sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Video className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-semibold">How I Prepared for Google Interviews</h4>
                    <div className="text-sm text-muted-foreground">By Arjun Mehta • March 20, 2025</div>
                  </div>
                  <Button variant="outline" className="ml-auto">Watch</Button>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Video className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-semibold">The Ultimate React Project Portfolio</h4>
                    <div className="text-sm text-muted-foreground">By Rahul Patel • March 15, 2025</div>
                  </div>
                  <Button variant="outline" className="ml-auto">Watch</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="my-mentors" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="h-40 flex flex-col items-center justify-center gap-4">
                <p className="text-muted-foreground">Sign in to see your mentor connections</p>
                <Button>Sign In</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Add the Search icon component to avoid TS errors
const Search = ({ className, ...props }) => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export default MentorshipPage;
