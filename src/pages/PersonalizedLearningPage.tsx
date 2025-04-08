
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from "@/components/ui/alert";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  BookOpen, 
  Code, 
  Database, 
  Globe, 
  Server, 
  Shield, 
  Smartphone, 
  MousePointerClick, 
  Zap,
  RocketIcon,
  Check,
  AlertTriangle
} from "lucide-react";

type LearningPath = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  completionRate: number;
  resources: {
    title: string;
    type: "Video" | "Article" | "Course" | "Project";
    platform: string;
    link: string;
    estimated: string;
  }[];
  skills: string[];
  prerequisites: string[];
  match: number;
};

const PersonalizedLearningPage = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2");
  const [selectedInterest, setSelectedInterest] = useState<string>("web");
  const [showRecommendations, setShowRecommendations] = useState<boolean>(true);

  // Mock learning paths data
  const learningPaths: Record<string, Record<string, LearningPath[]>> = {
    "1": {
      "web": [
        {
          id: "web-fundamentals",
          title: "Web Development Fundamentals",
          description: "Master the core building blocks of the web: HTML, CSS and JavaScript.",
          icon: Globe,
          difficulty: "Beginner",
          duration: "8 weeks",
          completionRate: 78,
          match: 95,
          resources: [
            {
              title: "HTML & CSS Crash Course",
              type: "Course",
              platform: "freeCodeCamp",
              link: "https://www.freecodecamp.org/learn/responsive-web-design/",
              estimated: "25 hours"
            },
            {
              title: "JavaScript Basics",
              type: "Course",
              platform: "MDN Web Docs",
              link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              estimated: "15 hours"
            },
            {
              title: "Build Your First Website",
              type: "Project",
              platform: "Frontend Mentor",
              link: "https://www.frontendmentor.io/",
              estimated: "10 hours"
            }
          ],
          skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "DOM Manipulation"],
          prerequisites: ["Basic computer skills", "Basic logic understanding"]
        },
        {
          id: "css-frameworks",
          title: "CSS Frameworks & Design Systems",
          description: "Learn how to use Bootstrap, Tailwind CSS, and build consistent designs.",
          icon: Smartphone,
          difficulty: "Beginner",
          duration: "4 weeks",
          completionRate: 65,
          match: 87,
          resources: [
            {
              title: "Tailwind CSS Crash Course",
              type: "Video",
              platform: "YouTube",
              link: "https://www.youtube.com/results?search_query=tailwind+css+crash+course",
              estimated: "3 hours"
            },
            {
              title: "Bootstrap 5 Tutorial",
              type: "Course",
              platform: "w3schools",
              link: "https://www.w3schools.com/bootstrap5/",
              estimated: "10 hours"
            },
            {
              title: "Build a Portfolio with Tailwind",
              type: "Project",
              platform: "Scrimba",
              link: "https://scrimba.com/",
              estimated: "8 hours"
            }
          ],
          skills: ["Bootstrap", "Tailwind CSS", "Responsive Design", "UI Components", "CSS Grid"],
          prerequisites: ["HTML & CSS basics"]
        }
      ],
      "backend": [
        {
          id: "programming-basics",
          title: "Programming Fundamentals with Python",
          description: "Learn the basics of programming using Python, a beginner-friendly language.",
          icon: Code,
          difficulty: "Beginner",
          duration: "10 weeks",
          completionRate: 82,
          match: 90,
          resources: [
            {
              title: "Python for Everybody",
              type: "Course",
              platform: "Coursera",
              link: "https://www.coursera.org/specializations/python",
              estimated: "30 hours"
            },
            {
              title: "Automate the Boring Stuff with Python",
              type: "Book",
              platform: "No Starch Press",
              link: "https://automatetheboringstuff.com/",
              estimated: "20 hours"
            },
            {
              title: "Python Mini Projects",
              type: "Project",
              platform: "Replit",
              link: "https://replit.com/",
              estimated: "15 hours"
            }
          ],
          skills: ["Python", "Variables", "Functions", "Control Flow", "Basic Data Structures"],
          prerequisites: ["None"]
        }
      ]
    },
    "2": {
      "web": [
        {
          id: "react-fundamentals",
          title: "React.js Fundamentals",
          description: "Build modern, reactive user interfaces with the popular React library.",
          icon: Code,
          difficulty: "Intermediate",
          duration: "8 weeks",
          completionRate: 73,
          match: 98,
          resources: [
            {
              title: "React - The Complete Guide",
              type: "Course",
              platform: "Udemy",
              link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
              estimated: "40 hours"
            },
            {
              title: "Build a Task Manager App",
              type: "Project",
              platform: "GitHub",
              link: "https://github.com/topics/task-manager",
              estimated: "15 hours"
            },
            {
              title: "React Hooks in Depth",
              type: "Article",
              platform: "React Docs",
              link: "https://reactjs.org/docs/hooks-intro.html",
              estimated: "5 hours"
            }
          ],
          skills: ["React.js", "JSX", "Components", "State", "Props", "Hooks"],
          prerequisites: ["HTML", "CSS", "JavaScript fundamentals"]
        },
        {
          id: "typescript-intro",
          title: "TypeScript for Frontend Development",
          description: "Add static typing to your JavaScript code for better reliability and developer experience.",
          icon: Code,
          difficulty: "Intermediate",
          duration: "4 weeks",
          completionRate: 68,
          match: 85,
          resources: [
            {
              title: "TypeScript Handbook",
              type: "Course",
              platform: "TypeScript Docs",
              link: "https://www.typescriptlang.org/docs/",
              estimated: "10 hours"
            },
            {
              title: "React with TypeScript",
              type: "Video",
              platform: "YouTube",
              link: "https://www.youtube.com/results?search_query=react+typescript",
              estimated: "8 hours"
            },
            {
              title: "Convert a JS Project to TS",
              type: "Project",
              platform: "GitHub",
              link: "https://github.com/",
              estimated: "12 hours"
            }
          ],
          skills: ["TypeScript", "Static Typing", "Interfaces", "Type Inference", "Generics"],
          prerequisites: ["JavaScript", "ES6 features"]
        }
      ],
      "backend": [
        {
          id: "node-express",
          title: "Backend Development with Node.js & Express",
          description: "Build scalable server-side applications with JavaScript.",
          icon: Server,
          difficulty: "Intermediate",
          duration: "10 weeks",
          completionRate: 71,
          match: 92,
          resources: [
            {
              title: "Node.js & Express.js Course",
              type: "Course",
              platform: "freeCodeCamp",
              link: "https://www.freecodecamp.org/news/free-8-hour-node-js-express-course/",
              estimated: "25 hours"
            },
            {
              title: "REST API with Express",
              type: "Project",
              platform: "Medium",
              link: "https://medium.com/",
              estimated: "15 hours"
            },
            {
              title: "Express Documentation",
              type: "Course",
              platform: "Express.js",
              link: "https://expressjs.com/",
              estimated: "8 hours"
            }
          ],
          skills: ["Node.js", "Express.js", "REST APIs", "Middleware", "Routing"],
          prerequisites: ["JavaScript", "Basic HTTP understanding"]
        },
        {
          id: "mongodb-intro",
          title: "NoSQL Databases with MongoDB",
          description: "Learn to work with document-oriented databases for modern applications.",
          icon: Database,
          difficulty: "Intermediate",
          duration: "6 weeks",
          completionRate: 69,
          match: 85,
          resources: [
            {
              title: "MongoDB University Courses",
              type: "Course",
              platform: "MongoDB",
              link: "https://university.mongodb.com/",
              estimated: "20 hours"
            },
            {
              title: "Build a CRUD App with MongoDB",
              type: "Project",
              platform: "Dev.to",
              link: "https://dev.to/",
              estimated: "12 hours"
            },
            {
              title: "MongoDB Atlas Tutorial",
              type: "Article",
              platform: "MongoDB Docs",
              link: "https://docs.mongodb.com/",
              estimated: "4 hours"
            }
          ],
          skills: ["MongoDB", "NoSQL", "CRUD Operations", "Document Model", "MongoDB Atlas"],
          prerequisites: ["JavaScript", "Basic database concepts"]
        }
      ]
    },
    "3": {
      "web": [
        {
          id: "advanced-frameworks",
          title: "Advanced Frontend Frameworks & State Management",
          description: "Master complex state management and advanced patterns in modern frameworks.",
          icon: Zap,
          difficulty: "Advanced",
          duration: "12 weeks",
          completionRate: 62,
          match: 78,
          resources: [
            {
              title: "Redux Toolkit Crash Course",
              type: "Video",
              platform: "YouTube",
              link: "https://www.youtube.com/results?search_query=redux+toolkit",
              estimated: "5 hours"
            },
            {
              title: "Next.js Documentation",
              type: "Course",
              platform: "Next.js",
              link: "https://nextjs.org/docs",
              estimated: "15 hours"
            },
            {
              title: "Build an E-commerce Platform",
              type: "Project",
              platform: "GitHub",
              link: "https://github.com/",
              estimated: "30 hours"
            }
          ],
          skills: ["Redux", "Context API", "Next.js", "Performance Optimization", "SSR/SSG"],
          prerequisites: ["React.js", "JavaScript", "API integration experience"]
        }
      ],
      "devops": [
        {
          id: "devops-fundamentals",
          title: "DevOps Fundamentals: CI/CD & Docker",
          description: "Learn the basics of DevOps practices, containerization, and continuous integration.",
          icon: Server,
          difficulty: "Intermediate",
          duration: "8 weeks",
          completionRate: 59,
          match: 75,
          resources: [
            {
              title: "Docker for Beginners",
              type: "Course",
              platform: "Docker Docs",
              link: "https://docs.docker.com/get-started/",
              estimated: "10 hours"
            },
            {
              title: "GitHub Actions Tutorial",
              type: "Video",
              platform: "YouTube",
              link: "https://www.youtube.com/results?search_query=github+actions",
              estimated: "6 hours"
            },
            {
              title: "Set Up CI/CD Pipeline",
              type: "Project",
              platform: "Dev.to",
              link: "https://dev.to/",
              estimated: "15 hours"
            }
          ],
          skills: ["Docker", "Containers", "GitHub Actions", "CI/CD", "Build Automation"],
          prerequisites: ["Command line basics", "Git version control"]
        }
      ]
    },
    "4": {
      "web": [
        {
          id: "system-design",
          title: "Frontend System Design",
          description: "Learn how to design scalable frontend architectures for enterprise applications.",
          icon: Brain,
          difficulty: "Advanced",
          duration: "10 weeks",
          completionRate: 55,
          match: 82,
          resources: [
            {
              title: "Frontend System Design Interview",
              type: "Course",
              platform: "ByteByteGo",
              link: "https://bytebytego.com/",
              estimated: "15 hours"
            },
            {
              title: "Building Micro-Frontends",
              type: "Book",
              platform: "O'Reilly",
              link: "https://www.oreilly.com/",
              estimated: "20 hours"
            },
            {
              title: "Design a Scalable Frontend App",
              type: "Project",
              platform: "GitHub",
              link: "https://github.com/",
              estimated: "25 hours"
            }
          ],
          skills: ["Micro-Frontends", "Component Design", "Performance", "Architecture Patterns"],
          prerequisites: ["Advanced React", "State management", "Production experience"]
        }
      ],
      "security": [
        {
          id: "security-fundamentals",
          title: "Web Security Fundamentals",
          description: "Learn the essentials of securing web applications against common threats.",
          icon: Shield,
          difficulty: "Advanced",
          duration: "8 weeks",
          completionRate: 58,
          match: 70,
          resources: [
            {
              title: "Web Security Academy",
              type: "Course",
              platform: "PortSwigger",
              link: "https://portswigger.net/web-security",
              estimated: "30 hours"
            },
            {
              title: "OWASP Top Ten",
              type: "Article",
              platform: "OWASP",
              link: "https://owasp.org/www-project-top-ten/",
              estimated: "8 hours"
            },
            {
              title: "Security Review of an Application",
              type: "Project",
              platform: "GitHub",
              link: "https://github.com/",
              estimated: "15 hours"
            }
          ],
          skills: ["XSS Prevention", "CSRF Protection", "Authentication", "Authorization", "Input Validation"],
          prerequisites: ["Web development experience", "Basic cryptography concepts"]
        }
      ]
    }
  };

  const recommendations = learningPaths[selectedYear]?.[selectedInterest] || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Personalized Learning</h1>
        <p className="text-muted-foreground">
          Tailored learning recommendations based on your year and interests
        </p>
      </div>

      <Alert>
        <MousePointerClick className="h-4 w-4" />
        <AlertTitle>Personalization at Work</AlertTitle>
        <AlertDescription>
          Our recommendation system analyzes your profile, academic progress, and learning patterns to suggest the most relevant content.
        </AlertDescription>
      </Alert>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Your Learning Profile</CardTitle>
          <CardDescription>Customize the recommendations based on your preferences</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="year" className="text-sm font-medium">Academic Year</label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger id="year">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">First Year</SelectItem>
                <SelectItem value="2">Second Year</SelectItem>
                <SelectItem value="3">Third Year</SelectItem>
                <SelectItem value="4">Final Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="interest" className="text-sm font-medium">Primary Interest</label>
            <Select value={selectedInterest} onValueChange={setSelectedInterest}>
              <SelectTrigger id="interest">
                <SelectValue placeholder="Select interest area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="backend">Backend & Databases</SelectItem>
                <SelectItem value="devops">DevOps & Cloud</SelectItem>
                <SelectItem value="security">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setShowRecommendations(true)}>
            Update Recommendations
          </Button>
        </CardFooter>
      </Card>

      {showRecommendations && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recommended Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((path) => (
              <Card key={path.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <path.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{path.title}</CardTitle>
                        <CardDescription>{path.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className={
                      path.match > 90 ? "bg-green-500" : 
                      path.match > 75 ? "bg-yellow-500" : "bg-blue-500"
                    }>
                      {path.match}% Match
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs text-muted-foreground">Difficulty</span>
                      <span className="font-medium flex items-center gap-1">
                        {path.difficulty === "Beginner" ? (
                          <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500">Beginner</Badge>
                        ) : path.difficulty === "Intermediate" ? (
                          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 border-yellow-500">Intermediate</Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500">Advanced</Badge>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span className="text-xs text-muted-foreground">Estimated Duration</span>
                      <span className="font-medium">{path.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Completion Rate</h4>
                      <div className="flex items-center space-x-2">
                        <Progress value={path.completionRate} className="h-2" />
                        <span className="text-xs font-medium">{path.completionRate}%</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {path.completionRate}% of students complete this path
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Skills You'll Learn</h4>
                      <div className="flex flex-wrap gap-1">
                        {path.skills.slice(0, 5).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {path.skills.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{path.skills.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Prerequisites</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {path.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-3 w-3 mr-2 mt-0.5 text-green-500" />
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Top Resources</h4>
                      <div className="space-y-2">
                        {path.resources.slice(0, 3).map((resource, index) => (
                          <a
                            key={index}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-between items-center p-2 bg-muted/50 rounded-md hover:bg-muted transition-colors"
                          >
                            <div>
                              <div className="text-sm font-medium">{resource.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {resource.platform} · Est. {resource.estimated}
                              </div>
                            </div>
                            <Badge variant="outline">
                              {resource.type}
                            </Badge>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <Button className="w-full">
                    Start This Path
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {recommendations.length === 0 && (
              <Card className="col-span-2 p-6 flex flex-col items-center justify-center text-center">
                <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold">No learning paths found</h3>
                <p className="text-muted-foreground mt-2 mb-6">
                  We couldn't find any learning paths matching your current criteria. Try changing your year or interests.
                </p>
                <Button onClick={() => {
                  setSelectedYear("2");
                  setSelectedInterest("web");
                }}>
                  Reset Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizedLearningPage;
