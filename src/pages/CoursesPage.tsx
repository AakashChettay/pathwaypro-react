
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Filter, Search } from "lucide-react";
import CourseCard, { CourseProps } from "@/components/CourseCard";

// Mock courses data
const coursesData: CourseProps[] = [
  {
    id: "cs101",
    title: "Introduction to Computer Science",
    provider: "MIT OpenCourseWare",
    description: "A comprehensive introduction to computer science and programming principles.",
    tags: ["Computer Science", "Python", "Algorithms"],
    difficulty: "beginner",
    duration: "8 weeks",
    link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/"
  },
  {
    id: "web101",
    title: "Web Development Bootcamp",
    provider: "freeCodeCamp",
    description: "Learn HTML, CSS, and JavaScript to build responsive websites from scratch.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    difficulty: "beginner",
    duration: "12 weeks",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/"
  },
  {
    id: "dsa201",
    title: "Data Structures and Algorithms",
    provider: "GeeksforGeeks",
    description: "Comprehensive course on data structures and algorithmic problem solving.",
    tags: ["DSA", "Java", "Problem Solving"],
    difficulty: "intermediate",
    duration: "10 weeks",
    link: "https://www.geeksforgeeks.org/data-structures/"
  },
  {
    id: "react101",
    title: "React - The Complete Guide",
    provider: "React.dev",
    description: "Learn React from the ground up, including hooks, context, and state management.",
    tags: ["React", "JavaScript", "Frontend"],
    difficulty: "intermediate",
    duration: "8 weeks",
    link: "https://react.dev/learn"
  },
  {
    id: "db101",
    title: "Database Management Systems",
    provider: "Stanford Online",
    description: "Introduction to database concepts, design, and SQL programming.",
    tags: ["Databases", "SQL", "Data Modeling"],
    difficulty: "intermediate",
    duration: "6 weeks",
    link: "https://online.stanford.edu/courses/soe-ydatabases-databases"
  },
  {
    id: "java201",
    title: "Advanced Java Programming",
    provider: "Oracle Academy",
    description: "Deep dive into Java programming with focus on OOP concepts and design patterns.",
    tags: ["Java", "OOP", "Design Patterns"],
    difficulty: "advanced",
    duration: "10 weeks",
    link: "https://academy.oracle.com/"
  },
  {
    id: "ml101",
    title: "Machine Learning Fundamentals",
    provider: "Google AI",
    description: "Learn the basics of machine learning algorithms and their applications.",
    tags: ["Machine Learning", "Python", "AI"],
    difficulty: "advanced",
    duration: "12 weeks",
    link: "https://developers.google.com/machine-learning"
  },
  {
    id: "node101",
    title: "Node.js Essentials",
    provider: "Node.js.org",
    description: "Build scalable backend applications with Node.js and Express.",
    tags: ["Node.js", "Backend", "JavaScript"],
    difficulty: "intermediate",
    duration: "6 weeks",
    link: "https://nodejs.org/en/learn"
  },
  {
    id: "sys101",
    title: "System Design Fundamentals",
    provider: "GitHub Learning",
    description: "Learn how to design scalable systems and architecture principles.",
    tags: ["System Design", "Architecture", "Scalability"],
    difficulty: "advanced",
    duration: "8 weeks",
    link: "https://github.com/donnemartin/system-design-primer"
  },
  {
    id: "git101",
    title: "Git & GitHub Complete Guide",
    provider: "GitHub Learning Lab",
    description: "Master version control with Git and collaboration with GitHub.",
    tags: ["Git", "GitHub", "Version Control"],
    difficulty: "beginner",
    duration: "4 weeks",
    link: "https://lab.github.com/"
  },
  {
    id: "py201",
    title: "Python for Data Analysis",
    provider: "DataCamp",
    description: "Learn data analysis with Python using NumPy, Pandas, and Matplotlib.",
    tags: ["Python", "Data Analysis", "Pandas"],
    difficulty: "intermediate",
    duration: "6 weeks",
    link: "https://www.datacamp.com/courses/introduction-to-data-science-in-python"
  },
  {
    id: "cloud101",
    title: "Cloud Computing Fundamentals",
    provider: "AWS Training",
    description: "Introduction to cloud services and deployment using AWS.",
    tags: ["Cloud", "AWS", "DevOps"],
    difficulty: "intermediate",
    duration: "8 weeks",
    link: "https://aws.amazon.com/training/"
  }
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  
  // Get all unique tags from courses
  const allTags = Array.from(
    new Set(coursesData.flatMap(course => course.tags))
  ).sort();
  
  // Filter courses based on search, tags, and difficulty
  const filteredCourses = coursesData.filter(course => {
    // Filter by search query
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected tags
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => course.tags.includes(tag));
    
    // Filter by difficulty
    const matchesDifficulty = selectedDifficulty === "" || 
      course.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesTags && matchesDifficulty;
  });
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedDifficulty("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Course Hub</h1>
        <p className="text-muted-foreground">
          Curated free courses to help you master essential skills
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle>Find Your Next Course</CardTitle>
          </div>
          <CardDescription>Filter through high-quality free learning resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses by name, provider, or keyword..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              
              <Tabs value={selectedDifficulty || "all"} onValueChange={setSelectedDifficulty}>
                <TabsList>
                  <TabsTrigger value="">All Levels</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </Tabs>
              
              {selectedTags.length > 0 && (
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Reset Filters
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge 
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">
          {filteredCourses.length} Courses Available
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-lg font-semibold">No courses match your filters</h3>
              <p className="text-muted-foreground mt-1">Try changing your search criteria</p>
              <Button variant="outline" className="mt-4" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
