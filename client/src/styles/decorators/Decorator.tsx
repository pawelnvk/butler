import * as cx from 'classnames';
import * as React from 'react';

export interface IDecoratorProps {
  children: React.ReactNode;
  className?: string;
}

const Decorator: React.SFC<IDecoratorProps> = ({ children, className }) => {
  const enhancedChildren = React.Children.map(children, (child: React.ReactElement<any>) => {
    const previousClassNames = child.props.className;

    return React.cloneElement(child, {
      className: cx(className, previousClassNames),
    });
  });

  return (
    <React.Fragment>{enhancedChildren}</React.Fragment>
  );
};

Decorator.defaultProps = {
  className: '',
};

export { Decorator };
