export const convertMilisecondsToString = (
  ms: number,
  mode: 'timer' | 'text' = 'timer'
): string => {
  const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, ms));
  const parts = [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];

  if (mode === 'timer') {
    return parts[0]
      ? parts.map((s) => String(s).padStart(2, '0')).join(':')
      : parts
          .slice(1)
          .map((s) => String(s).padStart(2, '0'))
          .join(':');
  }

  const [hours, minutes, seconds] = parts;

  return hours
    ? `${hours}h ${minutes}m ${seconds}s`
    : `${minutes}m ${seconds}s`;
};
