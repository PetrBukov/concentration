import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)<{ variant?: 'contained' | 'outlined' }>`
  background-color: ${({ variant = 'contained' }) =>
    variant === 'outlined' ? 'transparent' : 'rgba(255, 255, 255, 20%)'};
  color: ${({ variant = 'contained' }) =>
    variant === 'outlined' ? 'var(--yellow)' : 'var(--yellow)'};
  border: 1px solid rgba(255, 255, 255, 20%);
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
