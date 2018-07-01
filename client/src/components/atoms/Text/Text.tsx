import * as React from 'react';

import {
  COLOR_DEFAULT,
  T_COLOR,
} from './Text.constants';
import { Paragraph, Span } from './Text.styled';

interface ITextProps {
  children?: React.ReactNode;
  className?: string;
  color?: T_COLOR;
  inline?: boolean;
  small?: boolean;
}

const Text: React.SFC<ITextProps> = ({
  children,
  className,
  color,
  inline,
  small,
}) => {
  const Element = inline ? Span : Paragraph;

  return (
    <Element
      className={className}
      color={color}
      small={small}
    >
      {children}
    </Element>
  );
};

Text.defaultProps = {
  children: null,
  className: '',
  color: COLOR_DEFAULT,
  inline: false,
  small: false,
};

export { Text };
