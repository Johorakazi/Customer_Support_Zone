import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";

const TicketSection = ({ 
    tickets, 
    inProgress, 
    resolved, 
    handleAddToProgress, 
    handleComplete 
}) => {

   
    const getPriorityColor = (priority) => {
        if (priority === 'High') return 'text-red-500';
        if (priority === 'Medium') return 'text-yellow-500';
        return 'text-green-500';
    };

    return (
        <div className="container mx-auto px-10 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
           
            <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {tickets.map((ticket) => (
                        <div 
                            key={ticket.id} 
                            onClick={() => handleAddToProgress(ticket)}
                            className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition duration-200 h-full flex flex-col justify-between"
                        >
                           
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-bold text-gray-800 text-sm leading-tight w-[70%]">
                                    {ticket.title}
                                </h3>
                                
                               
                                <span className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap 
                                    ${ticket.status === 'Open' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                    <span className="text-[8px]">●</span> {ticket.status}
                                </span>
                            </div>

                           
                            <p className="text-gray-500 text-xs mb-6 line-clamp-2 leading-relaxed">
                                {ticket.description}
                            </p>

                            
                            <div className="flex justify-between items-end border-t border-gray-50 pt-4 mt-auto">
                                
                             
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] text-gray-400 font-medium">{ticket.id}</span>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${getPriorityColor(ticket.priority)}`}>
                                        {ticket.priority} PRIORITY
                                    </span>
                                </div>

                               
                                <div className="text-right flex flex-col items-end gap-1">
                                    <p className="text-gray-700 text-xs font-semibold">{ticket.customer}</p>
                                    <div className="flex items-center gap-1.5 text-gray-400 text-[10px]">
                                        <FaCalendarAlt className="text-gray-300" /> 
                                        <span>{ticket.createdAt}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="lg:col-span-1 space-y-8">
                
               
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Task Status</h2>
                    <p className="text-xs text-gray-400 mb-4">Select a ticket to add to Task Status</p>

                    <div className="space-y-4">
                        {inProgress.length === 0 && (
                            <div className="p-8 text-center text-gray-400 text-sm italic border border-dashed border-gray-200 rounded-lg bg-gray-50">
                                No resolved tasks yet.
                            </div>
                        )}
                        
                        {inProgress.map((ticket) => (
                            <div key={ticket.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-semibold text-sm text-gray-800 mb-3">{ticket.title}</h4>
                                <button 
                                    onClick={() => handleComplete(ticket.id)}
                                    className="w-full bg-[#10B981] hover:bg-green-600 text-white text-sm font-semibold py-2 rounded shadow-sm transition-colors"
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

               
                <div className="pt-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>
                    
                    {resolved.length === 0 && (
                        <p className="text-sm text-gray-400 italic">No resolved tasks yet.</p>
                    )}

                    <div className="space-y-2">
                        {resolved.map((ticket) => (
                            <div 
                                key={ticket.id} 
                                className="bg-[#E0E7FF] text-[#4338CA] px-4 py-3 rounded-md text-sm font-medium shadow-sm"
                            >
                                {ticket.title}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TicketSection;