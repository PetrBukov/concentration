import styled from '@emotion/styled';

export const CircleTextContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const CircleTextChar = styled.span<{
  charIndex: number;
  charTotal: number;
  diameter: number;
}>`
  --char-total: ${({ charTotal }) => charTotal};
  position: absolute;
  offset-path: path('M 0, 0.5 a 0.5,0.5 0 1,1 1,0 a 0.5,0.5 0 1,1 -1,0');
  padding-bottom: ${({ diameter }) => diameter}px;
  --char-index: ${({ charIndex }) => charIndex};
  --i: calc(100% / (var(--char-total) + 1));
  offset-distance: calc(var(--i) * var(--char-index));
`;
