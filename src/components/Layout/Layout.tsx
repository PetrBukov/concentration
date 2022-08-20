import React, { PropsWithChildren } from 'react';
import 'normalize.css';
import { globalStyles, StyledHeader, StyledMain } from './Layout.styles';
import { Global } from '@emotion/react';
import { GameCenter } from '../../providers';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <GameCenter>
      <Global styles={globalStyles} />
      <StyledHeader>
        <h1>Concentration</h1>
        <div>🌕</div>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </GameCenter>
  );
};
