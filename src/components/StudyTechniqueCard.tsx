
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface StudyTechniqueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  learnMoreLink: string;
}

const StudyTechniqueCard = ({ 
  title, 
  description, 
  icon: Icon, 
  benefits, 
  learnMoreLink 
}: StudyTechniqueCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-md">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-medium mb-2">Benefits:</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {benefit}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <a 
            href={learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyTechniqueCard;
