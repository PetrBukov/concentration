import React, { PropsWithChildren } from 'react';
import 'normalize.css';
import { globalStyles, StyledMain } from './Layout.styles';
import { Global } from '@emotion/react';
import { GameCenter } from '../../providers';
import { Footer } from '../Footer';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <GameCenter>
      <Global styles={globalStyles} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </GameCenter>
  );
};
