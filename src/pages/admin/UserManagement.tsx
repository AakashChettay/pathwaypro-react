
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Demo user data
  const users = [
    { id: 1, name: "John Smith", email: "john.smith@pathwaypro.edu", role: "Student", status: "Active", lastActive: "2 hours ago" },
    { id: 2, name: "Maria Garcia", email: "maria.garcia@pathwaypro.edu", role: "Student", status: "Active", lastActive: "1 day ago" },
    { id: 3, name: "David Chen", email: "david.chen@pathwaypro.edu", role: "Student", status: "Inactive", lastActive: "1 week ago" },
    { id: 4, name: "Sarah Johnson", email: "sarah.johnson@pathwaypro.edu", role: "Student", status: "Active", lastActive: "5 hours ago" },
    { id: 5, name: "James Wilson", email: "james.wilson@pathwaypro.edu", role: "Instructor", status: "Active", lastActive: "10 minutes ago" },
    { id: 6, name: "Lisa Rodriguez", email: "lisa.rodriguez@pathwaypro.edu", role: "Admin", status: "Active", lastActive: "Just now" },
  ];
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">Manage user accounts and permissions.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:max-w-sm">
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>Add New User</Button>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    user.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserManagement;
