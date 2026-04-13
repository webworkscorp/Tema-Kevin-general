import { Check } from "lucide-react";

interface Props {
  benefits: string[];
}

export default function Benefits({ benefits }: Props) {
  return (
    <div className="px-4 py-4 border-t border-border">
      <ul className="space-y-3">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1 bg-black rounded-full p-0.5">
              <Check className="w-3 h-3 text-white" />
            </div>
            <p className="text-sm leading-relaxed text-secondary">{benefit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
