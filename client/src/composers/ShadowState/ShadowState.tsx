import * as React from 'react';

interface IChildrenArguments {
  set: (newShadowState: any) => void;
  shadowState: any;
}
interface IShadowStateProps {
  children: (args: IChildrenArguments) => React.ReactNode;
  initial?: any;
}

class ShadowState extends React.Component<IShadowStateProps, any> {
  public static defaultProps = {
    initial: {},
  };

  public shadowState = {};

  public set = (newShadowState: any): void => {
    Object.entries(newShadowState).forEach(([propertyName, propertyValue]: [string, any]) => {
      const currentValue = this.shadowState[propertyName];

      if (currentValue === propertyValue) {
        return;
      }

      this.shadowState[propertyName] = propertyValue;
    });
  }

  public render(): React.ReactNode {
    const { children } = this.props;
    const shadowState = this.shadowState;

    return children({
      set: this.set,
      shadowState,
    });
  }
}

ShadowState.defaultProps = {
  initial: {},
};

export { ShadowState };
