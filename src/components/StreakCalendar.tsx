
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakCalendarProps {
  currentStreak: number;
  longestStreak: number;
  streakDays: boolean[];
  className?: string;
}

const StreakCalendar = ({
  currentStreak,
  longestStreak,
  streakDays,
  className
}: StreakCalendarProps) => {
  return (
    <div className={cn("rounded-lg border bg-card p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-primary" />
          Consistency Streak
        </h3>
        <div className="flex gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Current: </span>
            <span className="font-medium">{currentStreak} days</span>
          </div>
          <div>
            <span className="text-muted-foreground">Best: </span>
            <span className="font-medium">{longestStreak} days</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1.5 mb-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={i} className="text-xs text-center font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1.5">
        {streakDays.map((isActive, i) => (
          <div 
            key={i} 
            className={cn(
              "streak-dot",
              isActive 
                ? "streak-dot-active animate-streak-grow" 
                : "streak-dot-inactive"
            )}
          >
            {isActive && "✓"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreakCalendar;
