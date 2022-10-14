import React, { useCallback } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';

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

export const MainMenuPage: React.FC = () => {
  const navigate = useNavigate();

  const startNewGame = useCallback(
    () => navigate('/new-game', { replace: true }),
    [navigate]
  );

  return (
    <MainMenuPageContainer>
      <MoonButtonContainer>
        <CircleTextContainer>
          <CircleText text="memory spacce" diameter={250} />
        </CircleTextContainer>
        <PlayButton type="button" onClick={startNewGame}>
          <PlayButtonContent>
            <PlayButtonMoon>🌕</PlayButtonMoon>
            <PlayButtonIcon className="play-button__icon">
              <AiOutlinePlayCircle />
            </PlayButtonIcon>
          </PlayButtonContent>
        </PlayButton>
      </MoonButtonContainer>
    </MainMenuPageContainer>
  );
};
