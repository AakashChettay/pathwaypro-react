
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Search, Users, Filter, PlusCircle, ThumbsUp, MessageCircle, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Sample forum post data
const forumPosts = [
  {
    id: 1,
    title: "How to prepare for product-based company interviews?",
    author: {
      name: "Aditya S.",
      avatar: "/placeholder.svg",
      year: "4th Year"
    },
    category: "Placement",
    tags: ["Interview", "Preparation", "DSA"],
    upvotes: 42,
    replies: 18,
    views: 230,
    timePosted: "2 days ago",
    content: "I'm aiming for product-based companies in the upcoming campus placements. What's the best way to prepare for their technical interviews? Should I focus more on DSA or projects?"
  },
  {
    id: 2,
    title: "Resources for learning React.js from scratch",
    author: {
      name: "Priya M.",
      avatar: "/placeholder.svg",
      year: "2nd Year"
    },
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend"],
    upvotes: 35,
    replies: 24,
    views: 187,
    timePosted: "5 days ago",
    content: "I want to start learning React.js but there are so many resources out there. Which courses or tutorials would you recommend for a beginner who knows basic JavaScript?"
  },
  {
    id: 3,
    title: "Tips for maintaining consistent study habits",
    author: {
      name: "Rohan K.",
      avatar: "/placeholder.svg",
      year: "1st Year"
    },
    category: "Study Habits",
    tags: ["Consistency", "Time Management", "Productivity"],
    upvotes: 50,
    replies: 29,
    views: 321,
    timePosted: "1 week ago",
    content: "I've been struggling with maintaining consistency in my studies. Some days I'm super productive, and other days I can't focus at all. How do you all maintain a consistent study routine?"
  }
];

// Categories for forum posts
const categories = [
  "All Topics",
  "Placement",
  "Web Development",
  "DSA",
  "Machine Learning",
  "Study Habits",
  "Projects",
  "Internships"
];

const ForumPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Community Forum</h1>
          <p className="text-muted-foreground mt-1">
            Discuss, ask questions, and share knowledge with fellow students
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create New Post
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-4">
              {categories.map((category) => (
                <div 
                  key={category} 
                  className="flex items-center justify-between p-2 rounded-md hover:bg-secondary cursor-pointer"
                >
                  <span>{category}</span>
                  {category !== "All Topics" && (
                    <Badge variant="outline">
                      {Math.floor(Math.random() * 100) + 1}
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search forum posts..."
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

          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              <TabsTrigger value="my-posts">My Posts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="mt-4 space-y-4">
              {forumPosts.map((post) => (
                <Card key={post.id} className="hover:bg-accent/5 transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{post.author.name}</span>
                        <span className="text-xs text-muted-foreground">{post.author.year}</span>
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex items-center text-sm text-muted-foreground justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.upvotes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.timePosted}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="popular" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="h-40 flex items-center justify-center">
                    <p className="text-muted-foreground">Popular posts will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="unanswered" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="h-40 flex items-center justify-center">
                    <p className="text-muted-foreground">Unanswered posts will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="my-posts" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="h-40 flex items-center justify-center">
                    <p className="text-muted-foreground">Sign in to see your posts</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
