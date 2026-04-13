import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Elena R.",
    rating: 5,
    text: "Increíble producto. Mi piel se siente mucho más hidratada y luminosa desde la primera semana. ¡Totalmente recomendado!",
    date: "Hace 2 días"
  },
  {
    id: 2,
    author: "Marcos T.",
    rating: 5,
    text: "El envío fue rapidísimo y el packaging es premium. El serum no deja sensación grasa, lo cual es perfecto para mi piel mixta.",
    date: "Hace 1 semana"
  },
  {
    id: 3,
    author: "Sofía L.",
    rating: 4,
    text: "Me encanta la textura y el aroma sutil. He notado una mejora en la textura de mi rostro. Repetiré seguro.",
    date: "Hace 3 días"
  }
];

export default function SlidingReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50/50 border-y border-border px-4 overflow-hidden">
      <div className="relative max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < REVIEWS[currentIndex].rating ? "fill-black text-black" : "fill-gray-200 text-gray-200"}`} 
                />
              ))}
            </div>
            
            <p className="text-sm italic leading-relaxed text-primary px-4">
              "{REVIEWS[currentIndex].text}"
            </p>
            
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider font-display">
                {REVIEWS[currentIndex].author}
              </span>
              <span className="text-[10px] text-secondary">
                {REVIEWS[currentIndex].date}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-8 mt-6">
          <button onClick={prev} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 items-center">
            {REVIEWS.map((_, idx) => (
              <div 
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-black w-3" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
