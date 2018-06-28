import * as React from 'react';

import { Paragraph, Span } from './Text.styled';

interface ITextProps {
  children?: React.ReactNode,
  className?: string,
  inline?: boolean,
};

const Text: React.SFC<ITextProps> = ({ children, className, inline }) => {
  const Element = inline ? Span : Paragraph;

  return (
    <Element className={className}>{children}</Element>
  );
};

Text.defaultProps = {
  children: null,
  className: '',
  inline: false,
};

export { Text };
