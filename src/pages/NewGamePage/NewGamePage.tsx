import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameCenter } from '../../providers';

export const NewGamePage: React.FC = () => {
  const { dispatch } = useGameCenter();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'createNewGame' });
    navigate('/current-game', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>loading ...</div>;
};
