import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";
import BookingPopup from "./components/BookingPopup"; // <- adjust path if yours is in /components/ui

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10_000); // 10s
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>

      <TooltipProvider />
        <Toaster />
        <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <WhatsAppFloat />

      {showPopup && (
        <BookingPopup onClose={() => setShowPopup(false)} />
      )}
    </QueryClientProvider>
  );
};

export default App;
