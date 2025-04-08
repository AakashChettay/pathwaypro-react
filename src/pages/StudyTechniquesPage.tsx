
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Clock, BookOpen, Coffee, Lightbulb, Focus, Zap, FileText, Timer, ListChecks, Target, Users } from "lucide-react";
import StudyTechniqueCard from "@/components/StudyTechniqueCard";

const StudyTechniquesPage = () => {
  const techniques = {
    "time-management": [
      {
        title: "Pomodoro Technique",
        description: "Work in focused 25-minute intervals followed by 5-minute breaks.",
        icon: Timer,
        benefits: [
          "Improves focus and concentration",
          "Reduces mental fatigue",
          "Creates a sense of urgency",
          "Makes tasks less overwhelming"
        ],
        learnMoreLink: "https://francescocirillo.com/pages/pomodoro-technique"
      },
      {
        title: "Time Blocking",
        description: "Schedule specific blocks of time for different tasks or categories of work.",
        icon: Clock,
        benefits: [
          "Reduces context switching",
          "Creates realistic timelines",
          "Improves accountability",
          "Helps visualize your day"
        ],
        learnMoreLink: "https://todoist.com/productivity-methods/time-blocking"
      },
      {
        title: "Eisenhower Matrix",
        description: "Categorize tasks by urgency and importance to prioritize effectively.",
        icon: Target,
        benefits: [
          "Clarifies priorities",
          "Reduces stress from unclear objectives",
          "Improves decision-making",
          "Prevents procrastination on important tasks"
        ],
        learnMoreLink: "https://www.eisenhower.me/eisenhower-matrix/"
      }
    ],
    "memory-techniques": [
      {
        title: "Spaced Repetition",
        description: "Review material at gradually increasing intervals to improve long-term retention.",
        icon: Brain,
        benefits: [
          "Optimizes memory retention",
          "Reduces forgetting curve",
          "More efficient than cramming",
          "Builds stronger neural connections"
        ],
        learnMoreLink: "https://ncase.me/remember/"
      },
      {
        title: "Mind Mapping",
        description: "Create visual diagrams that connect ideas and concepts radiating from a central topic.",
        icon: Lightbulb,
        benefits: [
          "Visualizes relationships between concepts",
          "Improves creative thinking",
          "Helps organize complex information",
          "Enhances recall through visual cues"
        ],
        learnMoreLink: "https://www.mindmapping.com/"
      },
      {
        title: "Memory Palace",
        description: "Associate information with specific locations in a familiar place.",
        icon: FileText,
        benefits: [
          "Dramatically improves recall of ordered information",
          "Creates strong visual memory hooks",
          "Works for both short and long-term memory",
          "Especially useful for technical terminology"
        ],
        learnMoreLink: "https://artofmemory.com/blog/how-to-build-a-memory-palace/"
      }
    ],
    "focus-productivity": [
      {
        title: "Deep Work",
        description: "Dedicated periods of distraction-free, highly concentrated work.",
        icon: Focus,
        benefits: [
          "Produces higher quality outputs",
          "Builds valuable skills faster",
          "Increases work satisfaction",
          "Improves cognitive capabilities"
        ],
        learnMoreLink: "https://www.calnewport.com/books/deep-work/"
      },
      {
        title: "Active Recall",
        description: "Actively stimulate memory during learning instead of passive review.",
        icon: Zap,
        benefits: [
          "Strengthens neural pathways",
          "Identifies knowledge gaps quickly",
          "Improves long-term retention",
          "Makes studying more efficient"
        ],
        learnMoreLink: "https://aliabdaal.com/activerecallstudytechnique/"
      },
      {
        title: "Feynman Technique",
        description: "Teach concepts in simple language to identify gaps in your understanding.",
        icon: BookOpen,
        benefits: [
          "Reveals true understanding vs. memorization",
          "Simplifies complex topics",
          "Improves your ability to explain to others",
          "Strengthens core understanding"
        ],
        learnMoreLink: "https://fs.blog/feynman-technique/"
      }
    ],
    "group-study": [
      {
        title: "Jigsaw Method",
        description: "Each person learns a piece of content and then teaches it to others.",
        icon: Users,
        benefits: [
          "Builds teaching skills",
          "Creates accountability",
          "Exposes you to different perspectives",
          "Makes learning more interactive"
        ],
        learnMoreLink: "https://www.jigsaw.org/"
      },
      {
        title: "Peer Instruction",
        description: "Discuss challenging concepts with peers to deepen understanding.",
        icon: Brain,
        benefits: [
          "Exposes misconceptions",
          "Provides immediate feedback",
          "Encourages active engagement",
          "Builds communication skills"
        ],
        learnMoreLink: "https://blog.peerinstruction.net/"
      },
      {
        title: "Study Sprints",
        description: "Coordinate focused study sessions with breaks as a group.",
        icon: Timer,
        benefits: [
          "Creates positive peer pressure",
          "Makes studying more enjoyable",
          "Maintains consistent schedule",
          "Allows for immediate question answering"
        ],
        learnMoreLink: "https://tomato-timer.com/"
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Study Techniques Hub</h1>
        <p className="text-muted-foreground">
          Discover effective learning strategies optimized for Computer Science students
        </p>
      </div>

      <Alert>
        <Brain className="h-4 w-4" />
        <AlertTitle>Learning how to learn is a superpower</AlertTitle>
        <AlertDescription>
          The techniques in this hub are backed by cognitive science research and have been proven effective for technical fields like Computer Science.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="time-management" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="time-management" className="text-xs md:text-sm">
            <Clock className="h-4 w-4 mr-2" />
            Time Management
          </TabsTrigger>
          <TabsTrigger value="memory-techniques" className="text-xs md:text-sm">
            <Brain className="h-4 w-4 mr-2" />
            Memory Techniques
          </TabsTrigger>
          <TabsTrigger value="focus-productivity" className="text-xs md:text-sm">
            <Zap className="h-4 w-4 mr-2" />
            Focus & Productivity
          </TabsTrigger>
          <TabsTrigger value="group-study" className="text-xs md:text-sm">
            <Users className="h-4 w-4 mr-2" />
            Group Study
          </TabsTrigger>
        </TabsList>

        <TabsContent value="time-management" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techniques["time-management"].map((technique, index) => (
              <StudyTechniqueCard
                key={index}
                title={technique.title}
                description={technique.description}
                icon={technique.icon}
                benefits={technique.benefits}
                learnMoreLink={technique.learnMoreLink}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="memory-techniques" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techniques["memory-techniques"].map((technique, index) => (
              <StudyTechniqueCard
                key={index}
                title={technique.title}
                description={technique.description}
                icon={technique.icon}
                benefits={technique.benefits}
                learnMoreLink={technique.learnMoreLink}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="focus-productivity" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techniques["focus-productivity"].map((technique, index) => (
              <StudyTechniqueCard
                key={index}
                title={technique.title}
                description={technique.description}
                icon={technique.icon}
                benefits={technique.benefits}
                learnMoreLink={technique.learnMoreLink}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="group-study" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {techniques["group-study"].map((technique, index) => (
              <StudyTechniqueCard
                key={index}
                title={technique.title}
                description={technique.description}
                icon={technique.icon}
                benefits={technique.benefits}
                learnMoreLink={technique.learnMoreLink}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Resources for Further Learning</CardTitle>
          <CardDescription>Recommended books and courses on learning techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://barbaraoakley.com/books/a-mind-for-numbers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold">A Mind for Numbers</h3>
                <p className="text-sm text-muted-foreground">
                  Barbara Oakley's guide to learning math and science effectively
                </p>
              </a>
              <a 
                href="https://www.coursera.org/learn/learning-how-to-learn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold">Learning How to Learn (Coursera)</h3>
                <p className="text-sm text-muted-foreground">
                  Free online course teaching powerful mental tools for mastering tough subjects
                </p>
              </a>
              <a 
                href="https://www.scotthyoung.com/blog/ultralearning/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold">Ultralearning</h3>
                <p className="text-sm text-muted-foreground">
                  Scott Young's strategies for rapid skill acquisition
                </p>
              </a>
              <a 
                href="https://jamesclear.com/atomic-habits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold">Atomic Habits</h3>
                <p className="text-sm text-muted-foreground">
                  James Clear's framework for building and maintaining productive habits
                </p>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyTechniquesPage;
