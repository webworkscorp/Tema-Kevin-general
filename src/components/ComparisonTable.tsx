import React from "react";
import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    "Ingredientes Naturales",
    "Diseño Único y Divertido",
    "Fácil de usar en minutos"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h3 className="text-3xl font-extrabold tracking-tight font-display text-center leading-tight mb-10">
          ¿POR QUÉ LUMINA ES LA MEJOR OPCIÓN?
        </h3>

        <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left text-[10px] uppercase tracking-widest text-secondary font-bold">Característica</th>
                <th className="py-4 px-4 text-center bg-black text-white text-[10px] uppercase tracking-widest font-bold">Lumina</th>
                <th className="py-4 px-4 text-center text-[10px] uppercase tracking-widest text-secondary font-bold">Otros</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-border last:border-b-0">
                  <td className="py-5 px-4 text-xs font-medium text-primary leading-tight">
                    {feature}
                  </td>
                  <td className="py-5 px-4 bg-black/5 text-center">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-black" strokeWidth={3} />
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <div className="flex justify-center">
                      <X className="w-4 h-4 text-gray-300" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
