import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NoMatchPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>loading ...</div>;
};
