import React from "react";

export default function ProductDetails() {
  const benefitsTop = [
    {
      emoji: "✨",
      title: "Brillo Instantáneo",
      text: "Nuestra fórmula avanzada devuelve la luminosidad perdida a tu rostro desde la primera aplicación, eliminando el aspecto de piel cansada."
    },
    {
      emoji: "💧",
      title: "Hidratación Profunda",
      text: "Enriquecido con ácido hialurónico de bajo peso molecular que penetra en las capas más profundas para retener la humedad por 24 horas."
    }
  ];

  const benefitsBottom = [
    {
      emoji: "🌿",
      title: "Ingredientes Naturales",
      text: "Formulado con una mezcla exclusiva de extractos botánicos y vitaminas que nutren tu piel sin químicos agresivos ni parabenos."
    },
    {
      emoji: "🛡️",
      title: "Barrera Protectora",
      text: "Crea una capa invisible que fortalece la defensa natural de la piel contra los radicales libres y la contaminación ambiental diaria."
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#fcfcfc] border-t border-border">
      <div className="max-w-md mx-auto space-y-10">
        <h2 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight">
          Detalles del Serum Facial Iluminador
        </h2>

        <div className="space-y-8">
          {benefitsTop.map((benefit, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span>{benefit.emoji}</span>
                {benefit.title}
              </h4>
              <p className="text-secondary leading-relaxed text-sm">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <div className="py-4">
          <img 
            src="https://picsum.photos/seed/skincare-serum/800/600" 
            alt="Serum Facial Iluminador" 
            className="w-full h-auto rounded-2xl shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-8">
          {benefitsBottom.map((benefit, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <span>{benefit.emoji}</span>
                {benefit.title}
              </h4>
              <p className="text-secondary leading-relaxed text-sm">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
