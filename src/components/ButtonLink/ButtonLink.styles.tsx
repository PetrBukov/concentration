import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)<{ variant?: 'contained' | 'outlined' }>`
  background-color: ${({ variant = 'contained' }) =>
    variant === 'outlined' ? 'transparent' : 'var(--yellow)'};
  color: ${({ variant = 'contained' }) =>
    variant === 'outlined' ? 'var(--yellow)' : 'var(--violet)'};
  border: 1px solid var(--yellow);
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  padding: 4px 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 24px;
  cursor: pointer;

  &.disabled {
    pointer-events: none !important;
    cursor: default;
    filter: grayscale(1);
  }
`;
