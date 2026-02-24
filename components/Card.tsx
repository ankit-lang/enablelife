import React from 'react';
 
const services = [
  {
    title: "NDIS Plan Management",
    image: "/banner1.png",
    // Flat bottom-left
    shape: "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none" 
  },
  {
    title: "Support Coordination Services",
    image: "/banner1.png",
    // Flat bottom-right
    shape: "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none"
  },
  {
    title: "Daily And Community Living Supports",
    image: "/banner1.png",
    // Flat top-left
    shape: "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none"
  },
  {
    title: "Therapies",
    image: "/banner1.png",
    // Flat top-right
    shape: "rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none"
  },
 
];
 
export default function Cards() {
  return (
    <div className=" min-h-screen p-6 flex justify-center">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-w-2xl w-full">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`
              relative aspect-square overflow-hidden group cursor-pointer shadow-md
              ${service.shape}
              /* Optional: If you want the last odd item to span differently or align specifically, 
                 you can target it here. The grid naturally places it on the left. */
            `}
          >
            {/* Background Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-[#2b303a]/50 transition-colors group-hover:bg-[#2b303a]/60" />
            
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
              <h3 className="text-white font-medium text-sm sm:text-base leading-snug drop-shadow-md">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 