import * as React from 'react';

interface IChildrenArguments {
  set: (newState: any) => void;
  state: any;
}
interface IStateProps {
  children: (args: IChildrenArguments) => React.ReactNode;
  initial?: any;
}

class State extends React.Component<IStateProps, any> {
  public static defaultProps = {
    initial: {},
  };

  public state = this.props.initial as any;

  public set = (newState: any): void => {
    this.setState(newState);
  }

  public render(): React.ReactNode {
    const { children } = this.props;
    const state = this.state;

    return children({
      set: this.set,
      state,
    });
  }
}

State.defaultProps = {
  initial: {},
};

export { State };
