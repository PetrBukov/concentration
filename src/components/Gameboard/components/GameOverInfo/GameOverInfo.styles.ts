import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const crawl = keyframes`
    0% {
        top: 250px;
        transform: rotateX(20deg) translateZ(0);
        }
    100% {
        top: -6000px;
        transform: rotateX(25deg) translateZ(-2500px);
    }
`;

export const GameOverInfoContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 252px);
  max-width: 700px;

  .star-wars {
    display: flex;
    justify-content: center;
    position: relative;
    color: #feda4a;
    font-family: 'simpleStamp', sans-serif;
    font-size: 200%;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 400px;
    text-align: justify;
    height: 100%;
  }

  .crawl {
    position: relative;
    top: 99999px;
    transform-origin: 50% 100%;
    animation: ${crawl} 120s linear;
  }

  .crawl > .title {
    font-size: 90%;
    text-align: center;
  }

  .crawl > .title h1 {
    margin: 0 0 100px;
    text-transform: uppercase;
  }
`;
