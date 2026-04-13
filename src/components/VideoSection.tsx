import React from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/seed/skincare-v1/450/800",
      title: "Rutina de Mañana con Lumina",
      duration: "0:45"
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/seed/skincare-v2/450/800",
      title: "Resultados tras 30 días",
      duration: "1:20"
    }
  ];

  return (
    <section className="relative bg-white pt-20 pb-16 px-6">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120;120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#fcfcfc]"></path>
        </svg>
      </div>

      <div className="max-w-md mx-auto space-y-8">
        <h2 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight">
          Videos del Serum Facial Iluminador
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-lg">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-auto aspect-[9/16] object-cover opacity-80 transition-opacity group-hover:opacity-70"
                referrerPolicy="no-referrer"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                {video.duration}
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-bold text-[11px] leading-tight">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
