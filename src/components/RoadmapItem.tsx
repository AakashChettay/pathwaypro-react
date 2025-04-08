
import { Button } from "@/components/ui/button";
import { CheckIcon, ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapItemProps {
  title: string;
  description: string;
  completed: boolean;
  link?: string;
  onMarkComplete: () => void;
  className?: string;
}

const RoadmapItem = ({
  title,
  description,
  completed,
  link,
  onMarkComplete,
  className
}: RoadmapItemProps) => {
  return (
    <div className={cn("roadmap-item", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className={cn("font-medium", completed && "line-through text-muted-foreground")}>
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          {link && (
            <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="h-4 w-4 mr-1" />
                View
              </a>
            </Button>
          )}
          <Button 
            variant={completed ? "outline" : "default"} 
            size="sm" 
            className="h-8 px-3" 
            onClick={onMarkComplete}
          >
            {completed && <CheckIcon className="h-4 w-4 mr-1" />}
            {completed ? "Completed" : "Mark Complete"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
