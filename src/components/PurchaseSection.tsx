import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import OrderTracking from "./OrderTracking";
import SlidingReviews from "./SlidingReviews";

interface Props {
  price: number;
  currency: string;
}

export default function PurchaseSection({ price, currency }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-4 py-6 space-y-4">
      <div className="flex items-center justify-between border border-border rounded p-1 w-32">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-2 hover:bg-gray-50 transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="font-medium text-lg">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="p-2 hover:bg-gray-50 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <button className="w-full bg-black text-white font-bold py-4 rounded hover:bg-black/90 transition-all active:scale-[0.98]">
        Añadir al carrito – {currency}{(price * quantity).toFixed(2)}
      </button>

      <p className="text-center text-[11px] text-secondary">
        O paga en 3 plazos de {currency}{((price * quantity) / 3).toFixed(2)} sin intereses.
      </p>

      <OrderTracking />
      
      <SlidingReviews />
    </div>
  );
}
