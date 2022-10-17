import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotateText = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotateIcon = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const CircleTextContainer = styled.div`
  transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${rotateText} 42s linear infinite;

  .circle-text__container {
    font-family: 'simpleStamp', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    color: white;
  }

  .circle-text__char {
    text-shadow: -1px -1px 0 var(--yellow), 1px -1px 0 var(--yellow),
      -1px 1px 0 var(--yellow), 1px 1px 0 var(--yellow),
      -0.06em 0.06em 0 rgba(0, 0, 0, 08);
    color: white;
    opacity: 0.9;
  }
`;

export const PlayButtonIcon = styled.div<{ isGameLoading: boolean }>`
  transition: 0.2s;
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  font-size: 80px;
  opacity: 0.4;

  animation: ${rotateIcon} 1s linear infinite;
  ${({ isGameLoading }) => !isGameLoading && 'animation: none;'}
`;

export const PlayButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  text-decoration: none;
  display: block;
  font-size: 100px;
  transform: translate(-50%, -50%) scale(1.8);
  transition: 0.2s;
  padding: 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
  color: black;

  &:hover {
    transform: translate(-50%, -50%) scale(1.9);

    .play-button__icon {
      opacity: 0.5;
    }
  }
`;

export const PlayButtonContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PlayButtonMoon = styled.span`
  z-index: 3;
  line-height: 1;
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainMenuPageContainer = styled.div`
  display: grid;
`;

export const MoonButtonContainer = styled.div`
  position: relative;
`;
