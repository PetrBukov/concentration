import React, { useMemo } from 'react';
import { LinkProps } from 'react-router-dom';

import { StyledLink } from './ButtonLink.styles';

type ButtonLinkProps = LinkProps & {
  disabled?: boolean;
  variant?: 'contained' | 'outlined';
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  disabled,
  ...restProps
}) => {
  const className = useMemo(() => (disabled ? 'disabled' : ''), [disabled]);
  const tabIndex = useMemo(() => (disabled ? -1 : undefined), [disabled]);

  return (
    <StyledLink className={className} tabIndex={tabIndex} {...restProps} />
  );
};
