
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  FileText, 
  GraduationCap, 
  Users, 
  UserPlus, 
  TrendingUp, 
  Bell, 
  Slash
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AdminMetricCard from "@/components/admin/AdminMetricCard";
import AdminActivityLog from "@/components/admin/AdminActivityLog";

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage the platform's performance and users.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AdminMetricCard 
          title="Total Students" 
          value="4,328" 
          change="+12%"
          trend="up"
          icon={Users}
        />
        <AdminMetricCard 
          title="Active Courses" 
          value="86" 
          change="+4"
          trend="up"
          icon={BookOpen}
        />
        <AdminMetricCard 
          title="Completion Rate" 
          value="76%" 
          change="+2.5%"
          trend="up"
          icon={CheckCircle}
        />
        <AdminMetricCard 
          title="New Registrations" 
          value="245" 
          change="-8%"
          trend="down"
          icon={UserPlus}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Student Enrollment Trends</CardTitle>
            <CardDescription>Student enrollment over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center border rounded-md">
              <div className="flex flex-col items-center text-muted-foreground">
                <BarChart className="h-16 w-16 mb-2 opacity-50" />
                <p>Enrollment Chart Preview</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Platform alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New course approval requested</p>
                  <p className="text-xs text-muted-foreground">Advanced React Patterns by Dr. Lisa Chen</p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-destructive/10 rounded-full">
                  <Slash className="h-4 w-4 text-destructive" />
                </div>
                <div>
                  <p className="text-sm font-medium">Forum post flagged for review</p>
                  <p className="text-xs text-muted-foreground">Content may violate community guidelines</p>
                  <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-green-500/10 rounded-full">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Weekly report generated</p>
                  <p className="text-xs text-muted-foreground">Platform engagement up by 14%</p>
                  <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Course Completions</CardTitle>
            <CardDescription>Students who recently completed courses</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Smith</TableCell>
                  <TableCell>JavaScript Fundamentals</TableCell>
                  <TableCell>April 5, 2025</TableCell>
                  <TableCell>A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maria Garcia</TableCell>
                  <TableCell>Data Structures</TableCell>
                  <TableCell>April 4, 2025</TableCell>
                  <TableCell>A-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">David Chen</TableCell>
                  <TableCell>Cloud Computing</TableCell>
                  <TableCell>April 3, 2025</TableCell>
                  <TableCell>B+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sarah Johnson</TableCell>
                  <TableCell>UI/UX Design</TableCell>
                  <TableCell>April 3, 2025</TableCell>
                  <TableCell>A+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <AdminActivityLog />
      </div>
    </div>
  );
};

export default AdminDashboard;
