
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoadmapItem from "@/components/RoadmapItem";
import ProgressRing from "@/components/ProgressChart";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, BrainCircuit, Code, GraduationCap, TrendingUp } from "lucide-react";

interface RoadmapSemesterProps {
  semester: number;
  year: number;
  items: Array<{
    id: string;
    title: string;
    description: string;
    link?: string;
  }>;
  completedItems: Record<string, boolean>;
  onToggleCompletion: (id: string) => void;
}

const RoadmapSemester = ({
  semester,
  year,
  items,
  completedItems,
  onToggleCompletion
}: RoadmapSemesterProps) => {
  const completedCount = items.filter(item => completedItems[item.id]).length;
  const progress = (completedCount / items.length) * 100;
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Semester {semester}</CardTitle>
            <CardDescription>Year {year}</CardDescription>
          </div>
          <ProgressRing progress={progress} size={60} strokeWidth={4} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {items.map((item) => (
            <RoadmapItem
              key={item.id}
              title={item.title}
              description={item.description}
              completed={!!completedItems[item.id]}
              link={item.link}
              onMarkComplete={() => onToggleCompletion(item.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const RoadmapPage = () => {
  // Initial state for completed roadmap items
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({
    "dsa-basics": true,
    "html-css": true,
    "javascript-basics": false,
    "cs-fundamentals": true,
    "database-intro": true,
    "python-basics": true,
    "java-oop": false,
    "react-intro": false,
    "node-intro": false,
    "system-design": false,
    "mongodb": false,
    "api-design": false,
  });

  // Toggle completion status
  const toggleCompletion = (itemId: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Roadmap data for all 8 semesters
  const roadmapData: Record<string, RoadmapSemesterProps> = {
    "sem1": {
      semester: 1,
      year: 1,
      items: [
        {
          id: "cs-fundamentals",
          title: "Computer Science Fundamentals",
          description: "Learn basic computer architecture and principles",
          link: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science"
        },
        {
          id: "python-basics",
          title: "Python Programming Basics",
          description: "Introduction to programming with Python",
          link: "https://www.coursera.org/specializations/python"
        },
        {
          id: "html-css",
          title: "HTML & CSS Basics",
          description: "Learn to build basic web pages with HTML and CSS",
          link: "https://www.freecodecamp.org/learn/responsive-web-design/"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem2": {
      semester: 2,
      year: 1,
      items: [
        {
          id: "dsa-basics",
          title: "Data Structures Basics",
          description: "Learn fundamental data structures like arrays, linked lists",
          link: "https://www.geeksforgeeks.org/data-structures/"
        },
        {
          id: "database-intro",
          title: "Introduction to Databases",
          description: "Learn database concepts and basic SQL",
          link: "https://www.w3schools.com/sql/"
        },
        {
          id: "java-oop",
          title: "Java and OOP Concepts",
          description: "Object-oriented programming with Java",
          link: "https://dev.java/learn/"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem3": {
      semester: 3,
      year: 2,
      items: [
        {
          id: "javascript-basics",
          title: "JavaScript Fundamentals",
          description: "Learn core JavaScript concepts and DOM manipulation",
          link: "https://javascript.info/"
        },
        {
          id: "dsa-advanced",
          title: "Advanced Data Structures",
          description: "Trees, graphs and advanced algorithms",
          link: "https://leetcode.com/explore/"
        },
        {
          id: "git-version-control",
          title: "Git & Version Control",
          description: "Learn to use Git for project management",
          link: "https://www.atlassian.com/git/tutorials"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem4": {
      semester: 4,
      year: 2,
      items: [
        {
          id: "react-intro",
          title: "Introduction to React",
          description: "Learn React basics and component architecture",
          link: "https://react.dev/learn"
        },
        {
          id: "node-intro",
          title: "Node.js Basics",
          description: "Server-side JavaScript with Node.js",
          link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
        },
        {
          id: "mongodb",
          title: "MongoDB Fundamentals",
          description: "Working with NoSQL databases",
          link: "https://university.mongodb.com/"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem5": {
      semester: 5,
      year: 3,
      items: [
        {
          id: "api-design",
          title: "API Design & Development",
          description: "Build RESTful APIs and understand API concepts",
          link: "https://restfulapi.net/"
        },
        {
          id: "fullstack-project",
          title: "Full Stack Project",
          description: "Build a comprehensive web application",
          link: "https://fullstackopen.com/en/"
        },
        {
          id: "system-design",
          title: "System Design Basics",
          description: "Learn fundamentals of designing scalable systems",
          link: "https://github.com/donnemartin/system-design-primer"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem6": {
      semester: 6,
      year: 3,
      items: [
        {
          id: "cloud-services",
          title: "Cloud Services (AWS/Azure)",
          description: "Introduction to cloud computing and services",
          link: "https://aws.amazon.com/training/learn-about/"
        },
        {
          id: "devops-basics",
          title: "DevOps Fundamentals",
          description: "CI/CD, Docker and deployment strategies",
          link: "https://www.atlassian.com/devops"
        },
        {
          id: "interview-prep-technical",
          title: "Technical Interview Preparation",
          description: "Practice DSA problems and system design",
          link: "https://leetcode.com/"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem7": {
      semester: 7,
      year: 4,
      items: [
        {
          id: "project-capstone",
          title: "Capstone Project",
          description: "Build a significant project showcasing all skills",
          link: "#"
        },
        {
          id: "resume-building",
          title: "Resume Building & LinkedIn",
          description: "Create an effective resume and online presence",
          link: "https://www.linkedin.com/learning/"
        },
        {
          id: "interview-non-technical",
          title: "Non-Technical Interview Prep",
          description: "Prepare for behavioral and HR interviews",
          link: "#"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    },
    "sem8": {
      semester: 8,
      year: 4,
      items: [
        {
          id: "placement-interviews",
          title: "Placement Interviews",
          description: "Active participation in placement drives",
          link: "#"
        },
        {
          id: "specialized-tech",
          title: "Specialized Technology Track",
          description: "Deep-dive into a chosen specialization",
          link: "#"
        },
        {
          id: "soft-skills",
          title: "Communication & Soft Skills",
          description: "Develop workplace soft skills and communication",
          link: "#"
        }
      ],
      completedItems,
      onToggleCompletion: toggleCompletion
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Learning Roadmap</h1>
        <p className="text-muted-foreground">
          Follow this structured path to develop essential skills throughout your four years
        </p>
      </div>
      
      <div className="flex items-center justify-between gap-4 bg-muted/50 p-4 rounded-lg">
        <div>
          <h2 className="font-semibold">Roadmap Overview</h2>
          <p className="text-sm text-muted-foreground">Your personalized study plan for all 8 semesters</p>
        </div>
        
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            <div>
              <div className="text-sm font-medium">Academic Skills</div>
              <div className="text-xs text-muted-foreground">Core curriculum alignment</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-green-500" />
            <div>
              <div className="text-sm font-medium">Technical Skills</div>
              <div className="text-xs text-muted-foreground">Industry-relevant technologies</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-purple-500" />
            <div>
              <div className="text-sm font-medium">Placement Preparation</div>
              <div className="text-xs text-muted-foreground">Interview and job readiness</div>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="year1" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="year1">Year 1</TabsTrigger>
          <TabsTrigger value="year2">Year 2</TabsTrigger>
          <TabsTrigger value="year3">Year 3</TabsTrigger>
          <TabsTrigger value="year4">Year 4</TabsTrigger>
        </TabsList>
        
        <TabsContent value="year1" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoadmapSemester {...roadmapData.sem1} />
            <RoadmapSemester {...roadmapData.sem2} />
          </div>
          <div className="flex justify-end">
            <Button variant="outline">
              Next Year
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="year2" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoadmapSemester {...roadmapData.sem3} />
            <RoadmapSemester {...roadmapData.sem4} />
          </div>
          <div className="flex justify-between">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Year
            </Button>
            <Button variant="outline">
              Next Year
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="year3" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoadmapSemester {...roadmapData.sem5} />
            <RoadmapSemester {...roadmapData.sem6} />
          </div>
          <div className="flex justify-between">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Year
            </Button>
            <Button variant="outline">
              Next Year
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="year4" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoadmapSemester {...roadmapData.sem7} />
            <RoadmapSemester {...roadmapData.sem8} />
          </div>
          <div className="flex justify-start">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Year
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-primary" />
            <CardTitle>Skills You'll Gain</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Programming Fundamentals", icon: Code, color: "text-blue-500" },
              { name: "Web Development", icon: BookOpen, color: "text-green-500" },
              { name: "Database Management", icon: BookOpen, color: "text-yellow-500" },
              { name: "System Design", icon: BrainCircuit, color: "text-purple-500" },
              { name: "Problem Solving", icon: Code, color: "text-red-500" },
              { name: "Project Management", icon: TrendingUp, color: "text-indigo-500" },
              { name: "Interview Skills", icon: GraduationCap, color: "text-pink-500" },
              { name: "Technical Communication", icon: BookOpen, color: "text-teal-500" },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-3 border rounded-lg text-center">
                <skill.icon className={`h-8 w-8 ${skill.color}`} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadmapPage;
