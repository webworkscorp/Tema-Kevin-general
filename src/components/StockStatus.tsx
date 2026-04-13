interface Props {
  status: string;
  delivery: string;
}

export default function StockStatus({ status, delivery }: Props) {
  return (
    <div className="px-4 py-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
      <p className="text-sm font-medium text-success">
        {status}. <span className="text-secondary font-normal">{delivery}</span>
      </p>
    </div>
  );
}
