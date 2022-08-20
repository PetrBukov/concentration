import styled from '@emotion/styled';

export const Button = styled.button<{ variant?: 'contained' | 'outlined' }>`
  background-color: ${({ variant = 'contained' }) =>
    variant === 'outlined' ? 'transparent' : 'var(--yellow)'};
  color: ${({ variant = 'contained' }) =>
    variant === 'outlined' ? 'var(--yellow)' : 'var(--violet)'};
  border: 1px solid var(--yellow);

  &:disabled {
    filter: grayscale(1);
  }
`;
