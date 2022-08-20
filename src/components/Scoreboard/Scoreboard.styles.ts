import styled from '@emotion/styled';

export const StyledScoreboard = styled.div`
  border: 2px dashed var(--yellow);
  color: var(--yellow);
  padding: 12px 24px;

  ul {
    width: 120px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
      font-size: 20px;
      display: flex;
      justify-content: space-between;

      span {
        color: var(--white);
      }
    }
  }
`;

export const ScoreboardTitle = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  font-size: 24px;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;
