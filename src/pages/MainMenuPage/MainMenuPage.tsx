import React, { useCallback, useMemo, useState } from 'react';
import { AiOutlinePlayCircle, AiOutlineLoading } from 'react-icons/ai';

import {
  CircleTextContainer,
  MainMenuPageContainer,
  MoonButtonContainer,
  PlayButton,
  PlayButtonContent,
  PlayButtonIcon,
  PlayButtonMoon
} from './MainMenuPage.styles';
import { CircleText } from '../../components';
import { useNavigate } from 'react-router-dom';
import { LOADING_STATES } from './MainMenuPage.constants';

const runGameLoading = (
  currentState: number,
  onChangeState: React.Dispatch<React.SetStateAction<number>>,
  finalAction: () => void
) => {
  if (currentState >= 100) {
    finalAction();
    return;
  }

  onChangeState(currentState + 10);
  setTimeout(
    () => runGameLoading(currentState + 10, onChangeState, finalAction),
    300
  );
};

export const MainMenuPage: React.FC = () => {
  const navigate = useNavigate();
  const [loadingState, setLoadingState] = useState(0);

  const startNewGame = useCallback(() => {
    runGameLoading(loadingState, setLoadingState, () =>
      navigate('/new-game', { replace: true })
    );
  }, [navigate, loadingState]);

  const isGameLoading = useMemo(() => loadingState !== 0, [loadingState]);

  const circleTextValue = useMemo(
    () =>
      isGameLoading
        ? 'loading * loading * loading *'
        : 'press moon * to start *',
    [isGameLoading]
  );

  return (
    <MainMenuPageContainer>
      <MoonButtonContainer>
        <CircleTextContainer>
          <CircleText text={circleTextValue} diameter={250} />
        </CircleTextContainer>
        <PlayButton
          type="button"
          onClick={startNewGame}
          disabled={isGameLoading}
        >
          <PlayButtonContent>
            <PlayButtonMoon>
              {LOADING_STATES[String(loadingState)].emoji}
            </PlayButtonMoon>
            <PlayButtonIcon
              isGameLoading={isGameLoading}
              className="play-button__icon"
            >
              {isGameLoading ? <AiOutlineLoading /> : <AiOutlinePlayCircle />}
            </PlayButtonIcon>
          </PlayButtonContent>
        </PlayButton>
      </MoonButtonContainer>
    </MainMenuPageContainer>
  );
};
