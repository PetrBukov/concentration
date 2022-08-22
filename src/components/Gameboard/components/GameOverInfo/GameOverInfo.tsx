import React, { useMemo } from 'react';
import { convertMilisecondsToString } from '../../../../utils';
import { GameOverInfoContainer } from './GameOverInfo.styles';

type GameOverInfoProps = {
  movesCount: number;
  gameTimeMs: number;
};

export const GameOverInfo: React.FC<GameOverInfoProps> = ({
  movesCount,
  gameTimeMs
}) => {
  const congratsText = useMemo(() => {
    return `You have successfully completed this mission. It took you ${movesCount} moves and ${convertMilisecondsToString(
      gameTimeMs,
      'text'
    )} time to complete everything.`;
  }, [gameTimeMs, movesCount]);

  return (
    <GameOverInfoContainer>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Please accept my ...</p>
            <h1>Congrats!</h1>
          </div>

          <p>{congratsText}</p>

          <p>
            Don't stop there and keep training your memory. Remember, regularity
            is more important than quantity.
          </p>

          <p>
            One day you will thank yourself that you have trained your memory
            and concentration to such a high level that you stopped forgetting
            to turn off the iron and acquired the ability to easily sort all the
            socks into pairs ...
          </p>
        </div>
      </section>
    </GameOverInfoContainer>
  );
};
