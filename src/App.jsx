import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketSection from './components/TicketSection';
import Footer from './components/Footer';
import ticketData from './data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(ticketData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Handle Add to Progress
  const handleAddToProgress = (ticket) => {
    const isExist = inProgress.find((item) => item.id === ticket.id);
    const isResolved = resolved.find((item) => item.id === ticket.id);

    if (!isExist && !isResolved) {
      setInProgress([...inProgress, ticket]);
      toast.info("Ticket Added to In-Progress!");
    } else {
      toast.warn("Ticket already in process or resolved!");
    }
  };

  // Handle Complete
  const handleComplete = (id) => {
    const completedTicket = inProgress.find((t) => t.id === id);
    if (completedTicket) {
      setInProgress(inProgress.filter((t) => t.id !== id));
      setResolved([...resolved, completedTicket]);
      setTickets(tickets.filter((t) => t.id !== id)); 
      toast.success("Ticket Resolved Successfully!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
      
      <Navbar />
      
      <Banner 
        inProgressCount={inProgress.length} 
        resolvedCount={resolved.length} 
      />
      
      <TicketSection 
        tickets={tickets} 
        inProgress={inProgress} 
        resolved={resolved} 
        handleAddToProgress={handleAddToProgress} 
        handleComplete={handleComplete} 
      />
      
      <Footer />
    </div>
  );
}

export default App;