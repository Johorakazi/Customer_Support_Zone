import React from 'react';
import pattern1 from '../assets/vector1.png'; 
import pattern2 from '../assets/vector2.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
    
    
    console.log("Pattern 1:", pattern1);
    console.log("Pattern 2:", pattern2);

    return (
        <div className="container mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            
            <div 
                className="relative w-full h-[220px] rounded-xl shadow-lg transform transition hover:scale-[1.02] 
                           flex flex-col justify-center items-center text-white"
                style={{ 
                   
                    backgroundImage: `linear-gradient(to right, rgba(124, 58, 237, 0.9), rgba(167, 139, 250, 0.9)), url(${pattern1})`,
                    backgroundBlendMode: 'overlay', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h2 className="text-3xl font-medium opacity-90 mb-2 drop-shadow-md">In-Progress</h2>
                <p className="text-7xl font-bold drop-shadow-md">{inProgressCount}</p>
            </div>

            
            <div 
                className="relative w-full h-[220px] rounded-xl shadow-lg transform transition hover:scale-[1.02] 
                           flex flex-col justify-center items-center text-white"
                style={{ 
                    
                    backgroundImage: `linear-gradient(to right, rgba(34, 197, 94, 0.9), rgba(52, 211, 153, 0.9)), url(${pattern2})`,
                    backgroundBlendMode: 'overlay', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h2 className="text-3xl font-medium opacity-90 mb-2 drop-shadow-md">Resolved</h2>
                <p className="text-7xl font-bold drop-shadow-md">{resolvedCount}</p>
            </div>

        </div>
    );
};

export default Banner;