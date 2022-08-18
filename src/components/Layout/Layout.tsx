import React, { PropsWithChildren } from 'react';
import 'normalize.css';
import { globalStyles, StyledHeader, StyledMain } from './Layout.styles';
import { Global } from '@emotion/react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <StyledHeader>
        <h1>Concentration - card game</h1>
        <div>🌕</div>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  );
};
