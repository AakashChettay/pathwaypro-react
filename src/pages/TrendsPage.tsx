
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Newspaper, Code, Briefcase, Cpu, Database, Search, Cloud, Globe, Bookmark } from "lucide-react";
import TrendCard from "@/components/TrendCard";

const TrendsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarkedTopics, setBookmarkedTopics] = useState<string[]>([
    "Web Development", "Machine Learning"
  ]);

  // Mock data for the trends
  const trendsMock = {
    "tech-news": [
      {
        id: 1,
        title: "Google Announces New Advancements in Quantum Computing",
        description: "Google has unveiled its latest quantum processor with 72 qubits, setting a new record for quantum supremacy in solving complex problems.",
        image: "https://picsum.photos/800/400?random=1",
        date: "April 5, 2025",
        category: "Quantum Computing",
        likes: 128,
        comments: 32,
        source: "TechCrunch",
        sourceUrl: "https://techcrunch.com"
      },
      {
        id: 2,
        title: "Microsoft Introduces Revolutionary AI Code Completion Tool",
        description: "The new AI tool can predict and generate entire functions based on comments, significantly speeding up development time for programmers.",
        image: "https://picsum.photos/800/400?random=2",
        date: "April 3, 2025",
        category: "AI Tools",
        likes: 245,
        comments: 54,
        source: "The Verge",
        sourceUrl: "https://theverge.com"
      },
      {
        id: 3,
        title: "Web Assembly 2.0 Promises Near-Native Performance for Web Apps",
        description: "The latest WASM standard brings significant performance improvements and better integration with JavaScript ecosystems.",
        image: "https://picsum.photos/800/400?random=3",
        date: "April 2, 2025",
        category: "Web Development",
        likes: 189,
        comments: 41,
        source: "Mozilla Developer Network",
        sourceUrl: "https://developer.mozilla.org"
      },
      {
        id: 4,
        title: "New Zero-Day Vulnerability Discovered in Popular Database Systems",
        description: "Security researchers have identified a critical vulnerability affecting multiple SQL database implementations. Patches are being rapidly deployed.",
        image: "https://picsum.photos/800/400?random=4",
        date: "April 1, 2025",
        category: "Cybersecurity",
        likes: 176,
        comments: 68,
        source: "Krebs on Security",
        sourceUrl: "https://krebsonsecurity.com"
      },
      {
        id: 5,
        title: "Apple's Next-Gen Silicon Chips Set New Industry Benchmarks",
        description: "The M3 Pro and M3 Max chips offer unprecedented performance while maintaining exceptional energy efficiency for professionals.",
        image: "https://picsum.photos/800/400?random=5",
        date: "March 30, 2025",
        category: "Hardware",
        likes: 312,
        comments: 87,
        source: "Ars Technica",
        sourceUrl: "https://arstechnica.com"
      },
      {
        id: 6,
        title: "Open Source Foundation Launches $10M Fund for Critical Digital Infrastructure",
        description: "The initiative aims to support maintenance and development of essential open source projects that underpin modern technology stacks.",
        image: "https://picsum.photos/800/400?random=6",
        date: "March 28, 2025",
        category: "Open Source",
        likes: 201,
        comments: 45,
        source: "GitHub Blog",
        sourceUrl: "https://github.blog"
      }
    ],
    "job-trends": [
      {
        id: 7,
        title: "DevOps Engineers in High Demand as Companies Accelerate Cloud Migration",
        description: "Companies are offering competitive packages for professionals skilled in container orchestration, CI/CD pipelines, and infrastructure as code.",
        image: "https://picsum.photos/800/400?random=7",
        date: "April 5, 2025",
        category: "DevOps",
        likes: 167,
        comments: 39,
        source: "Stack Overflow Blog",
        sourceUrl: "https://stackoverflow.blog"
      },
      {
        id: 8,
        title: "Machine Learning Engineers Command Highest Salaries in Tech Sector",
        description: "The demand for ML specialists continues to outpace supply, with companies offering unprecedented compensation packages.",
        image: "https://picsum.photos/800/400?random=8",
        date: "April 4, 2025",
        category: "Machine Learning",
        likes: 248,
        comments: 51,
        source: "Indeed Tech",
        sourceUrl: "https://indeed.com"
      },
      {
        id: 9,
        title: "Remote Work Remains Strong for Software Engineers Post-Pandemic",
        description: "Despite some companies pushing for return to office, tech workers maintain leverage with abundant remote opportunities.",
        image: "https://picsum.photos/800/400?random=9",
        date: "April 2, 2025",
        category: "Work Culture",
        likes: 315,
        comments: 92,
        source: "LinkedIn News",
        sourceUrl: "https://linkedin.com"
      },
      {
        id: 10,
        title: "Cybersecurity Professionals Face Global Shortage as Threats Intensify",
        description: "The gap between security job openings and qualified candidates continues to widen, creating excellent opportunities for those with relevant skills.",
        image: "https://picsum.photos/800/400?random=10",
        date: "March 31, 2025",
        category: "Cybersecurity",
        likes: 203,
        comments: 47,
        source: "CSO Online",
        sourceUrl: "https://csoonline.com"
      },
      {
        id: 11,
        title: "Full-Stack JavaScript Developers Among Most Versatile and Hireable",
        description: "Proficiency in modern JavaScript frameworks continues to be one of the most bankable skill sets for new graduates entering the tech workforce.",
        image: "https://picsum.photos/800/400?random=11",
        date: "March 28, 2025",
        category: "Web Development",
        likes: 176,
        comments: 38,
        source: "freeCodeCamp",
        sourceUrl: "https://freecodecamp.org"
      },
      {
        id: 12,
        title: "Low-Code Development Specialists See Surge in Enterprise Demand",
        description: "As businesses seek to accelerate digital transformation, developers with expertise in low-code platforms are seeing increased opportunities.",
        image: "https://picsum.photos/800/400?random=12",
        date: "March 26, 2025",
        category: "Low-Code",
        likes: 142,
        comments: 29,
        source: "Gartner Blog",
        sourceUrl: "https://gartner.com"
      }
    ],
    "innovations": [
      {
        id: 13,
        title: "Researchers Achieve Breakthrough in Natural Language Understanding",
        description: "A new approach to language models enables more accurate contextual understanding with significantly reduced computational requirements.",
        image: "https://picsum.photos/800/400?random=13",
        date: "April 6, 2025",
        category: "AI Research",
        likes: 231,
        comments: 57,
        source: "MIT Technology Review",
        sourceUrl: "https://technologyreview.com"
      },
      {
        id: 14,
        title: "Autonomous Coding Assistant Passes Turing Test for Programming Tasks",
        description: "In blind tests, professional developers couldn't distinguish between code written by humans and the AI assistant for complex programming challenges.",
        image: "https://picsum.photos/800/400?random=14",
        date: "April 4, 2025",
        category: "AI Tools",
        likes: 289,
        comments: 76,
        source: "IEEE Spectrum",
        sourceUrl: "https://spectrum.ieee.org"
      },
      {
        id: 15,
        title: "New Framework Promises 10x Faster Web Applications with Half the Code",
        description: "The innovative approach combines ahead-of-time compilation with reactive programming to deliver unprecedented performance and developer experience.",
        image: "https://picsum.photos/800/400?random=15",
        date: "April 2, 2025",
        category: "Web Development",
        likes: 217,
        comments: 49,
        source: "Dev.to",
        sourceUrl: "https://dev.to"
      },
      {
        id: 16,
        title: "Decentralized Cloud Computing Platform Challenges AWS and Azure",
        description: "The blockchain-based distributed computing network offers lower costs and improved privacy compared to traditional cloud providers.",
        image: "https://picsum.photos/800/400?random=16",
        date: "March 31, 2025",
        category: "Cloud Computing",
        likes: 178,
        comments: 42,
        source: "CoinDesk",
        sourceUrl: "https://coindesk.com"
      },
      {
        id: 17,
        title: "Researchers Develop Self-Healing Code That Fixes Bugs Automatically",
        description: "The system can identify and patch vulnerabilities in real-time using advanced machine learning techniques trained on vast code repositories.",
        image: "https://picsum.photos/800/400?random=17",
        date: "March 29, 2025",
        category: "Software Engineering",
        likes: 256,
        comments: 68,
        source: "ACM TechNews",
        sourceUrl: "https://technews.acm.org"
      },
      {
        id: 18,
        title: "New Database Architecture Achieves Order of Magnitude Performance Gain",
        description: "The novel approach to data storage and retrieval offers unprecedented speed for both transactional and analytical workloads.",
        image: "https://picsum.photos/800/400?random=18",
        date: "March 27, 2025",
        category: "Databases",
        likes: 192,
        comments: 37,
        source: "InfoWorld",
        sourceUrl: "https://infoworld.com"
      }
    ]
  };

  // Filter trends based on search term
  const filterTrends = (trends: any[]) => {
    if (!searchTerm) return trends;
    return trends.filter(trend => 
      trend.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      trend.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trend.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Toggle bookmark for a topic
  const toggleBookmark = (topic: string) => {
    if (bookmarkedTopics.includes(topic)) {
      setBookmarkedTopics(bookmarkedTopics.filter(t => t !== topic));
    } else {
      setBookmarkedTopics([...bookmarkedTopics, topic]);
    }
  };

  // Popular topics
  const popularTopics = [
    "AI", "Web Development", "Cloud Computing", "Cybersecurity", 
    "Machine Learning", "DevOps", "Blockchain", "Data Science"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Industry Trends</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest technology news, job trends, and innovations
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search trends..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTopics.slice(0, 4).map(topic => (
            <Button
              key={topic}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => toggleBookmark(topic)}
            >
              {topic}
              {bookmarkedTopics.includes(topic) ? (
                <Bookmark className="h-3 w-3 fill-current" />
              ) : (
                <Bookmark className="h-3 w-3" />
              )}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="tech-news" className="space-y-4">
        <TabsList className="grid grid-cols-3 gap-2">
          <TabsTrigger value="tech-news" className="text-xs md:text-sm">
            <Newspaper className="h-4 w-4 mr-2" />
            Tech News
          </TabsTrigger>
          <TabsTrigger value="job-trends" className="text-xs md:text-sm">
            <Briefcase className="h-4 w-4 mr-2" />
            Job Trends
          </TabsTrigger>
          <TabsTrigger value="innovations" className="text-xs md:text-sm">
            <Cpu className="h-4 w-4 mr-2" />
            Innovations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tech-news" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filterTrends(trendsMock["tech-news"]).map(trend => (
              <TrendCard key={trend.id} {...trend} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="job-trends" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filterTrends(trendsMock["job-trends"]).map(trend => (
              <TrendCard key={trend.id} {...trend} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="innovations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filterTrends(trendsMock["innovations"]).map(trend => (
              <TrendCard key={trend.id} {...trend} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Top Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "Python", percentage: 85 },
                { name: "JavaScript", percentage: 78 },
                { name: "React.js", percentage: 72 },
                { name: "TensorFlow", percentage: 65 },
                { name: "Kubernetes", percentage: 58 }
              ].map(tech => (
                <div key={tech.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{tech.name}</span>
                    <span className="text-muted-foreground">{tech.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${tech.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Hiring Companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Microsoft", "Google", "Amazon", "IBM", 
                "Infosys", "TCS", "Wipro", "Accenture"
              ].map((company, index) => (
                <div key={index} className="flex justify-between items-center p-2 hover:bg-muted rounded-md">
                  <span className="font-medium">{company}</span>
                  <Badge variant="outline">
                    {Math.floor(Math.random() * 50) + 10} openings
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Industry Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "TechConf 2025", date: "May 15-17, 2025", location: "Bangalore" },
                { name: "Developer Summit", date: "June 5-7, 2025", location: "Hyderabad" },
                { name: "AI Expo India", date: "July 12-14, 2025", location: "Delhi" },
                { name: "Cloud Connect", date: "August 3-5, 2025", location: "Chennai" },
                { name: "CyberSec Forum", date: "September 8-10, 2025", location: "Mumbai" }
              ].map((event, index) => (
                <div key={index} className="space-y-1 p-2 hover:bg-muted rounded-md">
                  <h3 className="font-medium">{event.name}</h3>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrendsPage;
