import styled from '@emotion/styled';

export const CircleTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  .circle-text__container {
    font-family: 'simpleStamp', sans-serif;
    font-size: 42px;
    text-transform: uppercase;
    color: white;
  }

  .circle-text__char {
    text-shadow: -1px -1px 0 var(--yellow), 1px -1px 0 var(--yellow),
      -1px 1px 0 var(--yellow), 1px 1px 0 var(--yellow),
      -0.06em 0.06em 0 rgba(0, 0, 0, 08);
    color: var(--red);
  }
`;

export const PlayButtonIcon = styled.div`
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

export const PlayButtonMoon = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 5px;
  padding-left: 1px;
`;

export const MainMenuPageContainer = styled.div`
  display: grid;
`;

export const MoonButtonContainer = styled.div`
  position: relative;
`;
