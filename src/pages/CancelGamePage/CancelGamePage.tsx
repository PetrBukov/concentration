import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameCenter } from '../../providers';

export const CancelGamePage: React.FC = () => {
  const { dispatch } = useGameCenter();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'cancelCurrentGame' });
    navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>loading ...</div>;
};
