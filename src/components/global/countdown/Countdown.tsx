import { useEffect, useState } from 'react';

interface Props {
  target_date: string;
}

export default function Countdown({ target_date }: Props) {
  const target = new Date(target_date).getTime();
  const [remaining, setRemaining] = useState(() => target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setRemaining(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const total = Math.max(0, remaining);
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total % 86400000) / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  const seconds = Math.floor((total % 60000) / 1000);

  const units: [string, number][] = [
    ['Days', days],
    ['Hours', hours],
    ['Minutes', minutes],
    ['Seconds', seconds],
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="min-w-[80px] rounded-[var(--theme-radius)] bg-surface p-4 text-center shadow-sm"
        >
          <div className="text-3xl font-semibold text-primary">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
        </div>
      ))}
    </div>
  );
}
