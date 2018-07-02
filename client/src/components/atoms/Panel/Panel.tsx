import * as React from 'react';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Image } from './Image';
import { Panel as StyledPanel } from './Panel.styled';

interface IPanelProps {
  children?: React.ReactNode;
  className?: string;
}

const getChildByType = (
  children: React.ReactNode,
  childType: React.ReactNode,
) => React.Children.toArray(children).find(
  (child: React.ReactElement<any>) => child.type === childType,
);

const Panel: React.SFC<IPanelProps> = ({ children, className }) => {
  const body = getChildByType(children, Body);
  const footer = getChildByType(children, Footer);
  const header = getChildByType(children, Header);
  const image = getChildByType(children, Image);

  return (
    <StyledPanel className={className}>
      {header}
      {image}
      {body}
      {footer}
    </StyledPanel>
  );
};

Panel.defaultProps = {
  children: '',
  className: '',
};

export { Panel };
