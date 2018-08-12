import * as React from 'react';

interface IOnDidMountProps {
  action: () => void;
  children: React.ReactNode;
}

class OnDidMount extends React.Component<IOnDidMountProps> {
  public componentDidMount() {
    this.props.action();
  }

  public render() {
    const { children } = this.props;

    return children;
  }
}

export { OnDidMount };
