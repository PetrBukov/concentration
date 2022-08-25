import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const appearStar1 = keyframes`
    0% {
        transform: scale(0);
        }
    100% {
        transform: scale(1);
    }
`;

const appearStar2 = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const appearStar3 = keyframes`
    0% {
        transform: scale(0);
    }
    64% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const GameOverPageContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const GameOverPageCardHeader = styled.div`
  background-color: rgba(255, 255, 255, 20%);
  display: grid;
  align-items: center;
`;

export const GameOverPageCardContent = styled.div`
  padding: 12px;
  display: grid;
  grid-gap: 40px;
  grid-template-rows: 30px 1fr 30px;
  align-items: center;
`;

export const GameOverPageCardScores = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  font-size: 20px;
  color: var(--white);
`;

export const GameOverPageCardScoresItem = styled.div``;

export const GameOverPageCardRates = styled.div`
  display: grid;
  font-size: 32px;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 24px;
`;

export const GameOverPageCardRatesItem = styled.div`
  transform: scale(1);

  &:nth-of-type(1) {
    animation: ${appearStar1} 0.5s linear;
  }

  &:nth-of-type(2) {
    animation: ${appearStar2} 1s linear;
  }

  &:nth-of-type(3) {
    animation: ${appearStar3} 1.5s linear;
  }
`;

export const GameOverPageCardActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

export const GameOverPageCard = styled.div`
  width: 100%;
  height: 100%;
  max-width: 310px;
  max-height: 300px;
  background-color: rgba(255, 255, 255, 20%);
  border-radius: 4px;
  display: grid;
  grid-template-rows: 56px 1fr;
  overflow: hidden;
`;
