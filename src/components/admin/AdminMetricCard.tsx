
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface AdminMetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
}

const AdminMetricCard = ({ title, value, change, trend, icon: Icon }: AdminMetricCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
            <span className="text-2xl font-bold">{value}</span>
          </div>
          <div className="p-2 bg-primary/10 rounded-full">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          {trend === "up" ? (
            <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
          ) : trend === "down" ? (
            <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
          ) : null}
          <span className={`text-sm font-medium ${
            trend === "up" 
              ? "text-green-500" 
              : trend === "down" 
              ? "text-red-500" 
              : ""
          }`}>
            {change}
          </span>
          <span className="ml-1 text-xs text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminMetricCard;
