import styled from '@emotion/styled';

export const StyledCardButton = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;

  /* flip styles */
  perspective: 1000;

  &.selected .flipper {
    transform: rotateY(180deg);
  }

  .back,
  .front {
    width: 100%;
    height: 100%;
  }
  .flipper {
    width: 100%;
    height: 100%;
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }
  .back,
  .front {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;

    border-radius: 2px;
  }
  .back {
    background-color: var(--yellow);
    background-image: repeating-linear-gradient(
        135deg,
        var(--white),
        var(--white) 4px,
        transparent 4px,
        transparent 8px,
        var(--white) 8px,
        var(--white) 12px,
        transparent 12px,
        transparent 16px
      ),
      repeating-linear-gradient(
        -135deg,
        var(--white),
        var(--white) 4px,
        transparent 4px,
        transparent 8px,
        var(--white) 8px,
        var(--white) 12px,
        transparent 12px,
        transparent 16px
      );
    color: var(--violet);
    z-index: 2;
  }
  .front {
    background-color: var(--violet);
    color: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;

    transform: rotateY(180deg);
  }
`;
