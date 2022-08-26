import styled from '@emotion/styled';

export const MainMenuPageContainer = styled.div`
  color: var(--yellow);
  text-transform: uppercase;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 100px;

  .main-menu {
    display: grid;
    grid-gap: 14px;
  }

  h1.main-title {
    font-family: 'simpleStamp', sans-serif;
    text-transform: uppercase;
    text-align: center;
    display: grid;
    align-items: center;
    margin: 0;
    transform: translateY(-0.7em);
    grid-gap: 0.05em;
  }

  .main-title__subtitle {
    font-size: 0.4em;
    letter-spacing: 0.3em;
    transform: translateY(-0.15em);
  }
  .main-title__name {
    transform: scale(1.1);
    display: block;
    text-shadow: -0.04em 0.04em 0 rgba(0, 0, 0, 08);
    -webkit-text-stroke-width: 0.002em;
    -webkit-text-stroke-color: var(--yellow);
  }
  .main-title__name-letter {
    font-size: 1.5em;
    color: var(--red);
    --scale: 1;
    --rotate: 0;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform-origin: bottom;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;

    &.M1 {
      --scale: 1;
      --translateX: -1.04em;
      --translateY: -0.2em;
    }
    &.E1 {
      --scale: 1.2;
      --translateX: -0.74em;
      --translateY: -0.13em;
    }
    &.M2 {
      --scale: 1.5;
      --translateX: -0.39em;
      --translateY: -0.06em;
    }
    &.O1 {
      --scale: 2;
    }
    &.O2 {
      --scale: 1.5;
      --translateX: 0.35em;
      --translateY: -0.06em;
    }
    &.R {
      --scale: 1.2;
      --translateX: 0.7em;
      --translateY: -0.13em;
    }
    &.E2 {
      --scale: 1;
      --translateX: 1em;
      --translateY: -0.2em;
    }
  }
`;
