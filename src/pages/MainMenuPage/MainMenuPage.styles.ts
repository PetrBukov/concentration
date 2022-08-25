import styled from '@emotion/styled';

export const MainMenuPageContainer = styled.div`
  color: var(--yellow);
  text-transform: uppercase;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1.main-title {
    font-family: 'simpleStamp', sans-serif;
    letter-spacing: 6.5px;
    transform: scaleY(1.3);
    text-align: center;
    margin-bottom: 0;
    margin-top: 5px;
  }

  .main-title__postfix,
  .main-title__prefix {
    font-size: 14px;
    color: var(--white);
    margin: 0;
    padding: 12px 0;
    letter-spacing: 0.2px;
  }

  .main-title__prefix {
    border-top: 3px solid var(--yellow);
    padding-top: 82px;
  }

  .main-title__postfix {
    text-align: right;
    margin-bottom: 72px;
  }

  .main-menu {
    display: grid;
    grid-gap: 14px;
  }

  .main-logo {
    text-align: right;
    font-size: 32px;
  }
`;