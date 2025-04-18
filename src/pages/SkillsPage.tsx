
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlacementSkillCard from "@/components/PlacementSkillCard";
import { Check, Code, Database, FileCode, GanttChart, GraduationCap, Layout, Server } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  description: string;
  progress: number;
  category: "technical" | "soft" | "industry";
  color?: string;
}

const SkillsPage = () => {
  const [skills] = useState<Skill[]>([
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      description: "Fundamental algorithms and data structures for efficient problem solving",
      progress: 65,
      category: "technical",
      color: "stroke-blue-500"
    },
    {
      id: "web-dev",
      name: "Web Development",
      description: "Frontend and backend technologies for building web applications",
      progress: 78,
      category: "technical",
      color: "stroke-green-500"
    },
    {
      id: "database",
      name: "Database Management",
      description: "Designing and querying relational and NoSQL databases",
      progress: 42,
      category: "technical",
      color: "stroke-amber-500"
    },
    {
      id: "system-design",
      name: "System Design",
      description: "Designing scalable and maintainable software systems",
      progress: 35,
      category: "technical",
      color: "stroke-purple-500"
    },
    {
      id: "problem-solving",
      name: "Problem Solving",
      description: "Breaking down complex problems into manageable solutions",
      progress: 72,
      category: "soft",
      color: "stroke-indigo-500"
    },
    {
      id: "communication",
      name: "Communication",
      description: "Effectively conveying ideas and collaborating with team members",
      progress: 85,
      category: "soft",
      color: "stroke-pink-500"
    },
    {
      id: "time-management",
      name: "Time Management",
      description: "Prioritizing tasks and managing deadlines efficiently",
      progress: 68,
      category: "soft",
      color: "stroke-red-500"
    },
    {
      id: "cloud",
      name: "Cloud Computing",
      description: "Understanding and working with cloud services and deployment",
      progress: 55,
      category: "industry",
      color: "stroke-sky-500"
    },
    {
      id: "devops",
      name: "DevOps Practices",
      description: "Continuous integration, deployment, and infrastructure management",
      progress: 40,
      category: "industry",
      color: "stroke-emerald-500"
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      description: "Understanding fundamental concepts and applications of AI/ML",
      progress: 25,
      category: "industry",
      color: "stroke-violet-500"
    }
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skills & Competencies</h1>
        <p className="text-muted-foreground">
          Track your technical, soft, and industry-specific skills
        </p>
      </div>

      <Card className="border-none shadow-none">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Your Overall Skill Progress</CardTitle>
          <CardDescription>
            Based on your activity and assessments across all skill areas
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">55%</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-500" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <GanttChart className="h-5 w-5 text-purple-500" />
                  Industry Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="technical" className="space-y-4">
        <TabsList>
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          <TabsTrigger value="industry">Industry Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="technical" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills
              .filter((skill) => skill.category === "technical")
              .map((skill) => (
                <PlacementSkillCard
                  key={skill.id}
                  title={skill.name}
                  description={skill.description}
                  progress={skill.progress}
                  color={skill.color}
                />
              ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Technical Skill Roadmap</CardTitle>
              <CardDescription>
                Recommended learning path for improving your technical skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                    <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Data Structures & Algorithms</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Focus on mastering fundamental algorithms like sorting, searching, dynamic programming, and key data structures
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md">
                    <Layout className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Web Development</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Build responsive web applications using modern frameworks and libraries
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-md">
                    <Database className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Database Management</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Practice designing normalized database schemas and writing efficient SQL queries
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-md">
                    <Server className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">System Design</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn about scalable system architectures, microservices, and design patterns
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="soft" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills
              .filter((skill) => skill.category === "soft")
              .map((skill) => (
                <PlacementSkillCard
                  key={skill.id}
                  title={skill.name}
                  description={skill.description}
                  progress={skill.progress}
                  color={skill.color}
                />
              ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills Development</CardTitle>
              <CardDescription>
                Activities and resources to enhance your soft skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Communication Workshops</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Participate in campus communication workshops to improve technical and interpersonal communication
                  </p>
                  <div className="text-sm flex items-center gap-1 text-green-600">
                    <Check className="h-4 w-4" />
                    <span>Next workshop: April 25, 2025</span>
                  </div>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Group Project Experience</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collaborate with peers on team projects to develop leadership and teamwork skills
                  </p>
                  <div className="text-sm flex items-center gap-1 text-green-600">
                    <Check className="h-4 w-4" />
                    <span>Current project: Capstone Project (due June 15)</span>
                  </div>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Time Management Courses</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Online resources and techniques for better prioritization and productivity
                  </p>
                  <div className="text-sm flex items-center gap-1 text-blue-600">
                    <Check className="h-4 w-4" />
                    <span>Recommended: LinkedIn Learning - Time Management Fundamentals</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="industry" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills
              .filter((skill) => skill.category === "industry")
              .map((skill) => (
                <PlacementSkillCard
                  key={skill.id}
                  title={skill.name}
                  description={skill.description}
                  progress={skill.progress}
                  color={skill.color}
                />
              ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Industry Certifications</CardTitle>
              <CardDescription>
                Recommended certifications to boost your industry-specific skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">AWS Certified Solutions Architect</h4>
                  <p className="text-sm text-muted-foreground">
                    Validate your expertise in designing distributed systems on AWS
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Google Professional Cloud Developer</h4>
                  <p className="text-sm text-muted-foreground">
                    Demonstrate your ability to build scalable applications using Google Cloud
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">Microsoft Azure Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">
                    Build a solid foundation in cloud concepts and Microsoft Azure services
                  </p>
                </div>
                
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium mb-2">TensorFlow Developer Certificate</h4>
                  <p className="text-sm text-muted-foreground">
                    Prove your proficiency in using TensorFlow to implement machine learning models
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillsPage;
