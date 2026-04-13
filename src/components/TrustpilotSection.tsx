import React from "react";
import { Star, User } from "lucide-react";

export default function TrustpilotSection() {
  const reviews = [
    "Me encanta cómo deja mi piel. Súper hidratada y con un brillo natural increíble.",
    "El envío fue muy rápido y el producto llegó en perfecto estado. Muy contento con la compra.",
    "Llevo usándolo una semana y ya noto la diferencia. Mi cara se ve mucho más descansada.",
    "Excelente relación calidad-precio. El diseño es precioso y el serum funciona de maravilla.",
    "Lo compré por recomendación y no me arrepiento. Es mi nuevo básico en la rutina diaria."
  ];

  return (
    <section className="py-12 px-4 bg-white border-t border-border">
      <div className="max-w-md mx-auto text-center space-y-4">
        <h3 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight uppercase">
          Lumina Reviews
        </h3>
        
        <div className="flex items-center justify-center gap-3 mb-10">
          <img 
            src="https://i.imgur.com/ZQjU0a5.png" 
            alt="Trustpilot Stars" 
            className="h-14 w-auto object-contain block"
            referrerPolicy="no-referrer"
          />
          <span className="text-lg font-bold text-secondary leading-none -translate-y-[1px]">Excellent 4.8/5</span>
        </div>

        <div className="space-y-8 text-left">
          {reviews.map((text, idx) => (
            <div key={idx} className="flex flex-col gap-2 border-b border-border pb-6 last:border-b-0">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#00b67a] text-[#00b67a]" />
                ))}
              </div>
              <p className="text-sm text-primary leading-relaxed font-sans mt-1">
                "{text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
