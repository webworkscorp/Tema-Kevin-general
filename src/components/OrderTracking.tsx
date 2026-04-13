import React from "react";
import { ShoppingBag, Truck, Package } from "lucide-react";
import { motion } from "motion/react";

interface StepProps {
  icon: React.ReactNode;
  date: string;
  status: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

function TrackingStep({ icon, date, status, isCompleted, isCurrent }: StepProps) {
  return (
    <div className="flex flex-col items-center flex-1 relative z-10">
      {/* Date above */}
      <span className="text-[10px] text-secondary mb-2 h-4 flex items-end text-center">
        {date}
      </span>

      {/* Circle with Icon */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isCompleted || isCurrent ? "#000000" : "#f3f4f6",
          color: isCompleted || isCurrent ? "#ffffff" : "#9ca3af",
          scale: isCurrent ? 1.1 : 1,
        }}
        className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-border"
      >
        {icon}
      </motion.div>

      {/* Status below */}
      <span className={`mt-2 text-[11px] font-bold text-center leading-tight ${
        isCompleted || isCurrent ? "text-primary" : "text-secondary"
      }`}>
        {status}
      </span>
    </div>
  );
}

export default function OrderTracking() {
  return (
    <div className="w-full py-6 bg-white">
      <div className="relative flex justify-between items-start">
        {/* Connecting Line */}
        <div className="absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gray-100 -z-0">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            className="h-full bg-black"
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>

        <TrackingStep
          icon={<ShoppingBag className="w-5 h-5" />}
          date=""
          status="Pedido realizado"
          isCompleted={true}
          isCurrent={false}
        />
        
        <TrackingStep
          icon={<Truck className="w-5 h-5" />}
          date=""
          status="Pedido enviado"
          isCompleted={true}
          isCurrent={false}
        />
        
        <TrackingStep
          icon={<Package className="w-5 h-5" />}
          date=""
          status="Entregado"
          isCompleted={true}
          isCurrent={false}
        />
      </div>
    </div>
  );
}
