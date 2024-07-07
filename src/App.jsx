import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, BarChart2 } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Applications from "./pages/Applications.jsx";
import Analytics from "./pages/Analytics.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Applications",
    to: "/applications",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="applications" element={<Applications />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;