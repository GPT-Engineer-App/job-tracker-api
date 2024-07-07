import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Applications = () => {
  const applications = [
    { company: "Company A", title: "Software Engineer", status: "Applied", date: "2023-10-01", nextSteps: "Follow up" },
    { company: "Company B", title: "Frontend Developer", status: "Interviewing", date: "2023-09-25", nextSteps: "Prepare for interview" },
    // Add more applications as needed
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date Applied</TableHead>
          <TableHead>Next Steps</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((app, index) => (
          <TableRow key={index}>
            <TableCell>{app.company}</TableCell>
            <TableCell>{app.title}</TableCell>
            <TableCell>{app.status}</TableCell>
            <TableCell>{app.date}</TableCell>
            <TableCell>{app.nextSteps}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Applications;