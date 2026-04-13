import { Star } from "lucide-react";

interface Props {
  name: string;
}

export default function ProductInfo({ name }: Props) {
  return (
    <div className="px-4 py-6 space-y-3">
      <div className="flex items-center gap-1.5">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < 4 ? "fill-black text-black" : "fill-gray-200 text-gray-200"}`} 
            />
          ))}
        </div>
        <span className="text-sm font-bold">4.8/5</span>
        <span className="text-secondary text-sm ml-1">+2,500 clientes satisfechos</span>
      </div>
      <h2 className="text-2xl font-bold leading-tight font-display">{name}</h2>
    </div>
  );
}
