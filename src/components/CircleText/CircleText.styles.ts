import styled from '@emotion/styled';

export const CircleTextContainer = styled.div<{
  radius: number;
}>`
  width: ${({ radius }) => radius * 2}px;
  height: ${({ radius }) => radius * 2}px;
  max-width: ${({ radius }) => radius * 2}px;
  max-height: ${({ radius }) => radius * 2}px;
  border-radius: 50%;
  position: relative;
`;

export const CircleTextChar = styled.span<{
  charIndex: number;
  charTotal: number;
  radius: number;
}>`
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 30px;
  color: var(--violet);
  transform: translateX(-50%)
    rotate(
      ${({ charTotal, charIndex }) => (360 / (charTotal + 1)) * charIndex}deg
    );
  transform-origin: 50% ${({ radius }) => radius}px;
`;
