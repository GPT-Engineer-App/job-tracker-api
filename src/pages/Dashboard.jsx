import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const statuses = [
    { title: "Applied", count: 10 },
    { title: "Interviewing", count: 5 },
    { title: "Offered", count: 2 },
    { title: "Rejected", count: 3 },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {statuses.map((status) => (
        <Card key={status.title}>
          <CardHeader>
            <CardTitle>{status.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{status.count}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;