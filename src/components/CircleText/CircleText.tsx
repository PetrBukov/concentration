import React from 'react';
import { CircleTextContainer, CircleTextChar } from './CircleText.styles';

type CircleTextProps = {
  text: string;
  radius?: number;
};

export const CircleText: React.FC<CircleTextProps> = ({
  text,
  radius = 100
}) => {
  const phrase = text.split('');
  const phraseLetght = phrase.length;

  return (
    <CircleTextContainer className="circle-text__container" radius={radius}>
      {phrase.map((letter, index) => (
        <CircleTextChar
          key={`${letter}${index}`}
          charIndex={index + 1}
          charTotal={phraseLetght}
          radius={radius}
          className={`circle-text__char circle-text__char${index + 1}`}
        >
          {letter}
        </CircleTextChar>
      ))}
    </CircleTextContainer>
  );
};
