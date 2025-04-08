
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, GraduationCap, UserPlus, Settings, MessageSquare } from "lucide-react";

const AdminActivityLog = () => {
  const activities = [
    {
      id: 1,
      user: "Admin",
      action: "Added new course",
      detail: "Introduction to Machine Learning",
      time: "10 minutes ago",
      icon: FileText,
    },
    {
      id: 2,
      user: "Admin",
      action: "Approved student registration",
      detail: "Emily Johnson (emily.j@student.edu)",
      time: "42 minutes ago",
      icon: UserPlus,
    },
    {
      id: 3,
      user: "System",
      action: "Generated monthly report",
      detail: "March 2025 Performance Report",
      time: "1 hour ago",
      icon: GraduationCap,
    },
    {
      id: 4,
      user: "Admin",
      action: "Updated system settings",
      detail: "Modified forum posting policies",
      time: "3 hours ago",
      icon: Settings,
    },
    {
      id: 5,
      user: "Admin",
      action: "Responded to forum post",
      detail: "Re: Course prerequisites question",
      time: "5 hours ago",
      icon: MessageSquare,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Admin Activity Log</CardTitle>
        <CardDescription>Recent administrative actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 items-start">
              <div className="p-2 bg-primary/10 rounded-full">
                <activity.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.detail}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminActivityLog;
