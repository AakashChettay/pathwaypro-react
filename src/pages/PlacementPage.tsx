
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Award, BookOpen, BriefcaseIcon, CheckCircle2, ClipboardList, Code, ExternalLink, GraduationCap, User } from "lucide-react";
import PlacementSkillCard from "@/components/PlacementSkillCard";

const PlacementPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Placement Readiness</h1>
        <p className="text-muted-foreground">
          Track your preparation and get ready for placement interviews
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">72%</div>
            <Progress value={72} className="h-2 mt-2 bg-blue-200 dark:bg-blue-800">
              <div className="h-full bg-blue-600 dark:bg-blue-400 rounded-full" />
            </Progress>
            <p className="text-xs text-blue-700/70 dark:text-blue-300/70 mt-2">
              Core subjects and fundamentals
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              Coding Proficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">64%</div>
            <Progress value={64} className="h-2 mt-2 bg-purple-200 dark:bg-purple-800">
              <div className="h-full bg-purple-600 dark:bg-purple-400 rounded-full" />
            </Progress>
            <p className="text-xs text-purple-700/70 dark:text-purple-300/70 mt-2">
              Problem solving and DSA skills
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-green-600 dark:text-green-400" />
              Resume & Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700 dark:text-green-300">45%</div>
            <Progress value={45} className="h-2 mt-2 bg-green-200 dark:bg-green-800">
              <div className="h-full bg-green-600 dark:bg-green-400 rounded-full" />
            </Progress>
            <p className="text-xs text-green-700/70 dark:text-green-300/70 mt-2">
              Portfolio development status
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              Interview Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-700 dark:text-orange-300">38%</div>
            <Progress value={38} className="h-2 mt-2 bg-orange-200 dark:bg-orange-800">
              <div className="h-full bg-orange-600 dark:bg-orange-400 rounded-full" />
            </Progress>
            <p className="text-xs text-orange-700/70 dark:text-orange-300/70 mt-2">
              Soft skills and communication
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="skills">
        <TabsList className="mb-6">
          <TabsTrigger value="skills">Key Skills</TabsTrigger>
          <TabsTrigger value="companies">Target Companies</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="skills" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PlacementSkillCard
              title="Data Structures & Algorithms"
              description="Master common data structures and algorithms required for technical interviews."
              progress={64}
              color="stroke-blue-500"
            />
            <PlacementSkillCard
              title="Object-Oriented Programming"
              description="Understand OOP principles and design patterns for system design questions."
              progress={78}
              color="stroke-purple-500"
            />
            <PlacementSkillCard
              title="Database Management"
              description="Learn SQL queries and database design principles for backend roles."
              progress={45}
              color="stroke-green-500"
            />
            <PlacementSkillCard
              title="Web Development"
              description="Build responsive web applications using modern frameworks and techniques."
              progress={58}
              color="stroke-yellow-500"
            />
            <PlacementSkillCard
              title="System Design"
              description="Design scalable systems and understand architectural trade-offs."
              progress={32}
              color="stroke-red-500"
            />
            <PlacementSkillCard
              title="Soft Skills"
              description="Develop communication, teamwork, and problem-solving abilities."
              progress={48}
              color="stroke-indigo-500"
            />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Skills Gap Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Areas That Need Improvement</h3>
                  <div className="space-y-2">
                    {[
                      { skill: "System Design", recommendation: "Focus on basic architecture patterns and components" },
                      { skill: "Database Management", recommendation: "Practice SQL queries and normalization concepts" },
                      { skill: "Soft Skills", recommendation: "Work on mock interviews with peers for feedback" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                        <div className="mr-3 mt-0.5">
                          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{item.skill}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{item.recommendation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold mb-2">Your Strengths</h3>
                  <div className="space-y-2">
                    {[
                      { skill: "OOP Concepts", detail: "Strong understanding of inheritance, polymorphism, and encapsulation" },
                      { skill: "DSA Basics", detail: "Proficient in fundamental data structures like arrays, linked lists, and stacks" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                        <div className="mr-3 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{item.skill}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="companies" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Tier 1 Companies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Microsoft", roles: ["SDE", "Product Manager"], cgpa: "8.5+" },
                    { name: "Amazon", roles: ["SDE I", "Business Analyst"], cgpa: "8.0+" },
                    { name: "Google", roles: ["SDE", "UX Designer"], cgpa: "9.0+" }
                  ].map((company, i) => (
                    <div key={i} className="p-3 border rounded-md">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{company.name}</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 py-0.5 rounded-full">
                          CGPA {company.cgpa}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {company.roles.map((role, j) => (
                          <span key={j} className="text-xs bg-muted px-2 py-0.5 rounded">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5 text-primary" />
                  Tier 2 Companies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Infosys", roles: ["Systems Engineer", "Digital Specialist"], cgpa: "7.0+" },
                    { name: "TCS", roles: ["Assistant System Engineer", "Digital Solutions"], cgpa: "6.5+" },
                    { name: "Wipro", roles: ["Project Engineer", "Technical Support"], cgpa: "6.5+" },
                    { name: "Cognizant", roles: ["Programmer Analyst", "QA Engineer"], cgpa: "6.5+" }
                  ].map((company, i) => (
                    <div key={i} className="p-3 border rounded-md">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{company.name}</h4>
                        <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-0.5 rounded-full">
                          CGPA {company.cgpa}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {company.roles.map((role, j) => (
                          <span key={j} className="text-xs bg-muted px-2 py-0.5 rounded">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Placement Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Pre-Final Year (3rd Year)</h3>
                    <div className="space-y-2">
                      {[
                        { month: "August", activity: "Resume Building" },
                        { month: "October", activity: "Mock Aptitude Tests" },
                        { month: "December", activity: "Internship Interviews" },
                        { month: "May-July", activity: "Summer Internships" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between text-sm p-2 border-l-2 border-blue-500 pl-3">
                          <span className="font-medium">{item.month}</span>
                          <span className="text-muted-foreground">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Final Year (4th Year)</h3>
                    <div className="space-y-2">
                      {[
                        { month: "July", activity: "Placement Registration" },
                        { month: "August", activity: "Aptitude & Technical Tests" },
                        { month: "Sept-Nov", activity: "Interview Process" },
                        { month: "December", activity: "Offer Acceptance" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between text-sm p-2 border-l-2 border-green-500 pl-3">
                          <span className="font-medium">{item.month}</span>
                          <span className="text-muted-foreground">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Company-Specific Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    company: "Product-Based Companies",
                    requirements: [
                      "Strong DSA & problem-solving skills",
                      "System design & architecture knowledge",
                      "CS fundamentals (OS, DBMS, Networks)"
                    ],
                    resources: [
                      { name: "LeetCode", url: "https://leetcode.com" },
                      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }
                    ]
                  },
                  {
                    company: "Service-Based Companies",
                    requirements: [
                      "Aptitude & logical reasoning",
                      "Basic programming skills",
                      "Communication & soft skills"
                    ],
                    resources: [
                      { name: "IndiaBix", url: "https://www.indiabix.com" },
                      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" }
                    ]
                  }
                ].map((category, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-3">{category.company}</h3>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-2">Key Requirements</h4>
                      <ul className="space-y-1">
                        {category.requirements.map((req, j) => (
                          <li key={j} className="text-sm flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Helpful Resources</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.resources.map((resource, j) => (
                          <Button key={j} variant="outline" size="sm" asChild>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              {resource.name}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Technical Interview Prep
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      category: "Data Structures & Algorithms",
                      resources: [
                        { name: "LeetCode", url: "https://leetcode.com", description: "Practice coding problems by difficulty level" },
                        { name: "GeeksforGeeks DSA", url: "https://www.geeksforgeeks.org/data-structures/", description: "Comprehensive DSA tutorials and problems" },
                        { name: "Cracking the Coding Interview", url: "#", description: "Essential book for interview preparation" }
                      ]
                    },
                    {
                      category: "System Design",
                      resources: [
                        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", description: "GitHub repo with system design concepts" },
                        { name: "High Scalability", url: "http://highscalability.com/", description: "Articles on how large systems are designed" }
                      ]
                    }
                  ].map((section, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-sm font-semibold">{section.category}</h3>
                      <div className="space-y-2">
                        {section.resources.map((resource, j) => (
                          <div key={j} className="p-3 border rounded-md">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{resource.name}</h4>
                              <Button variant="ghost" size="sm" className="h-7 px-2" asChild>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Soft Skills & Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      category: "Resume Building",
                      resources: [
                        { name: "Resume Builder", url: "https://resume.io", description: "Professional resume templates and builder" },
                        { name: "Overleaf Resume Templates", url: "https://www.overleaf.com/gallery/tagged/cv", description: "LaTeX-based resume templates" }
                      ]
                    },
                    {
                      category: "Mock Interviews",
                      resources: [
                        { name: "Pramp", url: "https://www.pramp.com", description: "Free peer-to-peer mock interviews" },
                        { name: "InterviewBit", url: "https://www.interviewbit.com", description: "Practice interviews for product companies" }
                      ]
                    },
                    {
                      category: "Soft Skills Development",
                      resources: [
                        { name: "Coursera Communication", url: "https://www.coursera.org/courses?query=communication", description: "Communication skills courses" },
                        { name: "Effective Email Writing", url: "#", description: "Templates for professional emails" }
                      ]
                    }
                  ].map((section, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-sm font-semibold">{section.category}</h3>
                      <div className="space-y-2">
                        {section.resources.map((resource, j) => (
                          <div key={j} className="p-3 border rounded-md">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{resource.name}</h4>
                              <Button variant="ghost" size="sm" className="h-7 px-2" asChild>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Interview Preparation Checklists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold">Before the Interview</h3>
                    <ul className="space-y-2">
                      {[
                        "Research the company thoroughly",
                        "Review your projects and be ready to discuss them",
                        "Practice explaining your resume concisely",
                        "Prepare questions to ask the interviewer",
                        "Do 2-3 mock interviews with peers"
                      ].map((item, i) => (
                        <li key={i} className="text-sm flex items-start">
                          <div className="h-5 w-5 bg-background rounded-full flex items-center justify-center mr-2 flex-shrink-0 border text-xs">
                            {i + 1}
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold">During the Interview</h3>
                    <ul className="space-y-2">
                      {[
                        "Speak clearly and confidently",
                        "Listen carefully to the questions",
                        "Think out loud during problem-solving",
                        "Ask clarifying questions when needed",
                        "Be honest about what you don't know"
                      ].map((item, i) => (
                        <li key={i} className="text-sm flex items-start">
                          <div className="h-5 w-5 bg-background rounded-full flex items-center justify-center mr-2 flex-shrink-0 border text-xs">
                            {i + 1}
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold">After the Interview</h3>
                    <ul className="space-y-2">
                      {[
                        "Send a thank-you email within 24 hours",
                        "Follow up politely if no response in a week",
                        "Reflect on what went well and what didn't",
                        "Continue practicing for future interviews",
                        "Keep your options open with other companies"
                      ].map((item, i) => (
                        <li key={i} className="text-sm flex items-start">
                          <div className="h-5 w-5 bg-background rounded-full flex items-center justify-center mr-2 flex-shrink-0 border text-xs">
                            {i + 1}
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlacementPage;
