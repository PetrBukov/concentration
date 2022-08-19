import styled from '@emotion/styled';

export const StyledDashboard = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 900px;
  display: grid;
  grid-template-rows: 150px 1fr;
  grid-gap: 12px;
`;

export const Scoreboard = styled.div`
  border: 2px dashed var(--yellow);
  color: var(--yellow);
  padding: 12px 24px;

  h2 {
    margin: 0;
    margin-bottom: 12px;
    font-size: 24px;
  }

  ul {
    width: 110px;
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

export const Button = styled.button`
  background-color: var(--yellow);
  color: var(--violet);
  border: none;
  width: 110px;
`;
