
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MessageSquare, ThumbsUp } from "lucide-react";

interface TrendCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  likes: number;
  comments: number;
  source: string;
  sourceUrl: string;
}

const TrendCard = ({
  title,
  description,
  image,
  date,
  category,
  likes,
  comments,
  source,
  sourceUrl
}: TrendCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-200"
        />
        <Badge className="absolute top-3 right-3">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <span className="text-xs text-muted-foreground">Source: {source}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-xs">
            <ThumbsUp className="h-3 w-3" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MessageSquare className="h-3 w-3" />
            <span>{comments}</span>
          </div>
        </div>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">Read More</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default TrendCard;
