import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const moonHueRotate = keyframes`
    0% {
      filter: hue-rotate(307deg) brightness(0.85);
    }
    50% {
      filter: hue-rotate(346deg) brightness(0.85);
    }
    100% {
      filter: hue-rotate(307deg) brightness(0.85);
    }
`;

export const MainMenuPageContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  justify-content: center;
  align-content: center;

  .main-menu {
    display: grid;
    grid-gap: 14px;
    z-index: 3;
  }

  h1.main-title {
    position: relative;
    display: grid;
    align-items: center;
    height: 6em;
    margin: 0;
    font-family: 'simpleStamp', sans-serif;
  }

  .main-title__name {
    display: block;
    transform: translate(0.05em, 0.2em) scaleY(0.5);
    text-shadow: -1px -1px 0 var(--yellow), 1px -1px 0 var(--yellow),
      -1px 1px 0 var(--yellow), 1px 1px 0 var(--yellow),
      -0.06em 0.06em 0 rgba(0, 0, 0, 08);
    font-size: 2em;
    letter-spacing: 0.2em;
    color: var(--red);
    z-index: 2;
  }

  .main-title__moon {
    position: absolute;
    left: 50%;
    top: 62%;
    transform: translate(-50%, -50%) scale(2);
    z-index: 1;
    font-size: 3em;
    filter: hue-rotate(307deg) brightness(0.85);
    animation: ${moonHueRotate} 20s infinite linear;
  }
`;
