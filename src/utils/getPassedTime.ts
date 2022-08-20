export const getPassedTime = (ms: number): string => {
  const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, ms));
  const parts = [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];

  return parts[0]
    ? parts.map((s) => String(s).padStart(2, '0')).join(':')
    : parts
        .slice(1)
        .map((s) => String(s).padStart(2, '0'))
        .join(':');
};
