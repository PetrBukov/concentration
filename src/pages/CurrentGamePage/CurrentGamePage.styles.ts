import styled from '@emotion/styled';

export const CurrentGamePageContainer = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr 50px;
  grid-gap: 32px;
  height: 100%;
  overflow: hidden;
`;

export const CurrentGamePageActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
`;

export const CurrentGamePageScores = styled.div`
  background-color: rgba(255, 255, 255, 20%);
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  font-size: 20px;
  color: var(--white);
  border-radius: 4px;
`;

export const CurrentGamePageScoresItem = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  justify-items: center;
  grid-gap: 12px;
`;

export const CurrentGamePageScoresItemIcon = styled.div`
  font-size: 28px;
  color: var(--yellow);
  display: grid;
`;
