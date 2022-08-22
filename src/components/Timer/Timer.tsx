import React, { useEffect, useState } from 'react';
import { convertMilisecondsToString } from '../../utils';

type TimerProps = {
  startDateMs?: number;
  endDateMs?: number | null;
};

export const Timer: React.FC<TimerProps> = ({ startDateMs, endDateMs }) => {
  const [timeSinceStarting, setTime] = useState(() =>
    startDateMs ? Date.now() - startDateMs : 0
  );

  useEffect(() => {
    let intervalID: NodeJS.Timer | undefined;

    if (startDateMs && !endDateMs) {
      intervalID = setInterval(() => {
        setTime(Date.now() - startDateMs);
      }, 10);
    } else if (startDateMs && endDateMs && intervalID) {
      clearInterval(intervalID);
    }

    return () => intervalID && clearInterval(intervalID);
  }, [startDateMs, endDateMs]);

  if (!startDateMs) {
    return <span>--:--</span>;
  }

  return <span>{convertMilisecondsToString(timeSinceStarting)}</span>;
};
