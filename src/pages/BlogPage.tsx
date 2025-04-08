
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Calendar, 
  Edit, 
  Eye, 
  Filter, 
  Heart, 
  MessageSquare, 
  PenSquare, 
  Search, 
  Share, 
  ThumbsUp 
} from "lucide-react";

// Mock blog data
const blogs = [
  {
    id: 1,
    title: "How I Cracked My Google Interview: A Step-by-Step Guide",
    author: {
      name: "Rahul Sharma",
      avatar: "/placeholder.svg",
      year: "CSE, Class of 2023"
    },
    featured: true,
    date: "April 2, 2025",
    readTime: "8 min read",
    category: "Placement",
    tags: ["Interview", "Google", "Preparation"],
    likes: 124,
    comments: 32,
    views: 1250,
    excerpt: "After months of preparation and four interview rounds, I received an offer from Google. Here's my detailed preparation strategy, the resources I used, and tips that made all the difference."
  },
  {
    id: 2,
    title: "Building Your First Full-Stack App with React and Node.js",
    author: {
      name: "Priya Patel",
      avatar: "/placeholder.svg",
      year: "CSE, 3rd Year"
    },
    featured: false,
    date: "March 25, 2025",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["React", "Node.js", "Tutorial"],
    likes: 89,
    comments: 21,
    views: 850,
    excerpt: "This step-by-step guide covers everything from setting up your development environment to deploying your first full-stack application. Perfect for beginners looking to build their portfolio."
  },
  {
    id: 3,
    title: "5 Essential Data Structures Every CS Student Must Master",
    author: {
      name: "Arjun Singh",
      avatar: "/placeholder.svg",
      year: "CSE, 4th Year"
    },
    featured: false,
    date: "March 18, 2025",
    readTime: "6 min read",
    category: "Data Structures",
    tags: ["DSA", "Programming", "Interviews"],
    likes: 112,
    comments: 18,
    views: 980,
    excerpt: "From arrays to graphs, these five data structures form the foundation of computer science. I break down each one with examples, use cases, and common interview problems to practice."
  },
  {
    id: 4,
    title: "My Journey from College Projects to a Microsoft Internship",
    author: {
      name: "Ananya Kumar",
      avatar: "/placeholder.svg",
      year: "CSE, Class of 2024"
    },
    featured: false,
    date: "March 10, 2025",
    readTime: "10 min read",
    category: "Career",
    tags: ["Internship", "Microsoft", "Projects"],
    likes: 98,
    comments: 27,
    views: 750,
    excerpt: "Landing an internship at Microsoft seemed impossible in my first year. Here's how I strategically built my skills, portfolio, and network to make it happen by third year."
  },
  {
    id: 5,
    title: "How I Maintained a Perfect 2-Year Coding Streak",
    author: {
      name: "Vikram Reddy",
      avatar: "/placeholder.svg",
      year: "CSE, 4th Year"
    },
    featured: false,
    date: "March 5, 2025",
    readTime: "7 min read",
    category: "Productivity",
    tags: ["Consistency", "Coding", "Habits"],
    likes: 77,
    comments: 15,
    views: 620,
    excerpt: "Consistency transformed my learning journey. I share the habits, tools, and mindset shifts that helped me code every day for two years straight, and how it changed my career trajectory."
  }
];

// Blog categories
const categories = [
  "All",
  "Placement",
  "Web Development",
  "Data Structures",
  "Machine Learning",
  "Career",
  "Productivity",
  "Mobile Development"
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredBlog = blogs.find(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Student Articles</h1>
          <p className="text-muted-foreground mt-1">
            Learn from peer experiences and share your knowledge
          </p>
        </div>
        <Button>
          <PenSquare className="mr-2 h-4 w-4" /> Write an Article
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full overflow-auto">
          {categories.map((category) => (
            <TabsTrigger 
              key={category}
              value={category.toLowerCase()}
              onClick={() => setSelectedCategory(category)}
              className="flex-shrink-0"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="mt-6 space-y-8">
          {featuredBlog && (
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary">
                      Featured
                    </Badge>
                    <Badge variant="outline">{featuredBlog.category}</Badge>
                  </div>
                  
                  <CardTitle className="text-2xl mb-3">
                    {featuredBlog.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-4">
                    {featuredBlog.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={featuredBlog.author.avatar} alt={featuredBlog.author.name} />
                      <AvatarFallback>{featuredBlog.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{featuredBlog.author.name}</div>
                      <div className="text-xs text-muted-foreground">{featuredBlog.author.year}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredBlog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{featuredBlog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredBlog.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button>Read Article</Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/3 bg-muted flex items-center justify-center p-6">
                  <div className="aspect-video w-full h-full bg-secondary flex items-center justify-center rounded-lg">
                    <Edit className="h-12 w-12 text-secondary-foreground opacity-30" />
                  </div>
                </div>
              </div>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularBlogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden flex flex-col">
                <div className="aspect-video w-full bg-muted flex items-center justify-center">
                  <Edit className="h-10 w-10 text-muted-foreground opacity-30" />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline">{blog.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="border-t pt-4 flex flex-col gap-4">
                  <div className="flex items-center gap-3 w-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                      <AvatarFallback>{blog.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{blog.author.name}</div>
                      <div className="text-xs text-muted-foreground">{blog.date} · {blog.readTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{blog.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{blog.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Read</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {categories.slice(1).map((category) => (
          <TabsContent key={category} value={category.toLowerCase()} className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="h-40 flex items-center justify-center">
                  <p className="text-muted-foreground">{category} articles will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Writing Resources</h2>
          <Button variant="link">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <PenSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Article Guidelines</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to write effective technical articles
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Topic Ideas</h3>
                <p className="text-sm text-muted-foreground">
                  Explore popular topics that readers want
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="bg-primary/10 p-3 rounded-full">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Publishing Process</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your draft and get feedback
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
