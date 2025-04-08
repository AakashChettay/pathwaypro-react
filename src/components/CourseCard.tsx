
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenIcon, ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface CourseProps {
  id: string;
  title: string;
  provider: string;
  description: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  link: string;
}

interface CourseCardProps {
  course: CourseProps;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const difficultyColor = {
    beginner: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
    advanced: "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100",
  };

  return (
    <Card className={cn("course-card h-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{course.title}</CardTitle>
          <Badge variant="outline" className={difficultyColor[course.difficulty]}>
            {course.difficulty}
          </Badge>
        </div>
        <CardDescription>{course.provider}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground">{course.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {course.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center text-xs text-muted-foreground">
          <BookOpenIcon className="h-3.5 w-3.5 mr-1" />
          {course.duration}
        </div>
        <Button size="sm" asChild>
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="h-4 w-4 mr-1" />
            Start Learning
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
