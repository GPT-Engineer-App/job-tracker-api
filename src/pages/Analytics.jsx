import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  const data = {
    labels: ["Applied", "Interviewing", "Offered", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [10, 5, 2, 3],
        backgroundColor: ["#4caf50", "#ffeb3b", "#2196f3", "#f44336"],
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
};

export default Analytics;