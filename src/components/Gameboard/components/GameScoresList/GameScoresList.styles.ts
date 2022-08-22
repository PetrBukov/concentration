import styled from '@emotion/styled';

export const GameScoresListContainer = styled.ul`
  margin: 0;
  padding: 12px 24px;
  border: 2px dashed var(--yellow);
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const GameScoresListItem = styled.li`
  font-size: 20px;
  text-transform: uppercase;

  &:nth-child(1) {
    justify-self: start;
  }
  &:nth-child(2) {
    justify-self: end;
  }
`;

export const GameScoresListItemTitle = styled.span`
  color: var(--yellow);
`;

export const GameScoresListItemValue = styled.span`
  color: var(--white);
`;
