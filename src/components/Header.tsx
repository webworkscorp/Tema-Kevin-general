import { Menu, Search, Heart, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border px-4 py-3 flex items-center justify-between">
      <button className="p-1" aria-label="Menu">
        <Menu className="w-6 h-6" />
      </button>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-xl font-bold tracking-tighter uppercase">LUMINA</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-1" aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-1 hidden sm:block" aria-label="Favorites">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-1 relative" aria-label="Cart">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    </header>
  );
}
