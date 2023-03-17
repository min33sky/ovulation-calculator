interface Props {
  onQuickSelection: (value: number) => void;
  value: number;
}

export default function Tag({ onQuickSelection, value }: Props) {
  return (
    <span
      onClick={() => onQuickSelection(value)}
      className="cursor-pointer rounded-lg bg-slate-600 px-3 py-2 text-white transition hover:bg-slate-800 hover:ring hover:ring-slate-300 hover:ring-offset-1"
    >
      {value}
    </span>
  );
}
