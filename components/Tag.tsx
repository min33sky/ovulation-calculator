interface Props {
  onQuickSelection: (value: number) => void;
  value: number;
}

export default function Tag({ onQuickSelection, value }: Props) {
  return (
    <span
      onClick={() => onQuickSelection(value)}
      className="cursor-pointer rounded-lg bg-gray-900 px-3 py-2 text-white"
    >
      {value}
    </span>
  );
}
