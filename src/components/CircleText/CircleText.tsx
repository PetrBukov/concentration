import React from 'react';
import { CircleTextContainer, CircleTextChar } from './CircleText.styles';

type CircleTextProps = {
  text: string;
  diameter?: number;
};

export const CircleText: React.FC<CircleTextProps> = ({
  text,
  diameter = 100
}) => {
  const phrase = text.split('');
  const phraseLetght = phrase.length;

  return (
    <CircleTextContainer className="circle-text__container">
      {phrase.map((letter, index) => (
        <CircleTextChar
          key={`${letter}${index}`}
          charIndex={index + 1}
          charTotal={phraseLetght}
          diameter={diameter}
          className={`circle-text__char circle-text__char${index + 1}`}
        >
          {letter}
        </CircleTextChar>
      ))}
    </CircleTextContainer>
  );
};
