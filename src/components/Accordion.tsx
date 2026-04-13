import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <span className="text-sm font-bold uppercase tracking-wider font-display">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-secondary leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Props {
  description: string;
  howToUse: string;
  ingredients: string;
  features: string[];
  precautions: string;
}

export default function Accordion({ description, howToUse, ingredients, features, precautions }: Props) {
  return (
    <div className="px-4 py-4 border-t border-border">
      <AccordionItem title="Descripción">
        <p>{description}</p>
      </AccordionItem>
      <AccordionItem title="Cómo usar">
        <p>{howToUse}</p>
      </AccordionItem>
      <AccordionItem title="Ingredientes">
        <p>{ingredients}</p>
      </AccordionItem>
      <AccordionItem title="Características">
        <ul className="list-disc pl-4 space-y-1">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </AccordionItem>
      <AccordionItem title="Precauciones">
        <p>{precautions}</p>
      </AccordionItem>
    </div>
  );
}
