
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressRing from "./ProgressChart";
import { cn } from "@/lib/utils";

interface PlacementSkillCardProps {
  title: string;
  description: string;
  progress: number;
  color?: string;
  className?: string;
}

const PlacementSkillCard = ({
  title,
  description,
  progress,
  color = "stroke-primary",
  className
}: PlacementSkillCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <ProgressRing 
            progress={progress} 
            size={80} 
            strokeWidth={6} 
            color={color}
          />
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlacementSkillCard;
