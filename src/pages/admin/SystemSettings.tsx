
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const SystemSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground">Configure platform settings and preferences.</p>
      </div>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
            <CardDescription>Configure email notification preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Course Announcements</span>
                <span className="text-sm text-muted-foreground">Send emails for course announcements and updates</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Forum Replies</span>
                <span className="text-sm text-muted-foreground">Send emails when someone replies to a post</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Mentor Conversations</span>
                <span className="text-sm text-muted-foreground">Send emails for new mentor messages</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">System Updates</span>
                <span className="text-sm text-muted-foreground">Send emails about platform updates and downtime</span>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Configure security settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Two-Factor Authentication</span>
                <span className="text-sm text-muted-foreground">Require 2FA for all admin accounts</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Password Policy</span>
                <span className="text-sm text-muted-foreground">Enforce strong password requirements</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Session Timeout</span>
                <span className="text-sm text-muted-foreground">Time in minutes before inactive sessions expire</span>
              </div>
              <Input defaultValue="60" className="w-24" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Content Moderation</CardTitle>
            <CardDescription>Configure content moderation settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Forum Post Approval</span>
                <span className="text-sm text-muted-foreground">Require admin approval for forum posts</span>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Comment Filtering</span>
                <span className="text-sm text-muted-foreground">Automatically filter inappropriate comments</span>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col">
                <span className="font-medium">Content Report Notifications</span>
                <span className="text-sm text-muted-foreground">Send notifications when content is reported</span>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end gap-4">
          <Button variant="outline">Reset to Defaults</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
