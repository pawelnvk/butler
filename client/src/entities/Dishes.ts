import * as React from 'react';

import { makeGetDishesRequest } from 'src/api/dishes';

interface IChildrenArguments {
  error: any;
  hasMadeRequest: boolean;
  isLoading: boolean;
  items: any[];
}
interface IDishesProps {
  children: (args: IChildrenArguments) => React.ReactNode;
}

class Dishes extends React.Component<IDishesProps, any> {
  public static defaultProps = {
    initial: {},
  };

  public state = {
    error: null,
    hasMadeRequest: false,
    isLoading: false,
    items: [],
  };

  public async getAll() {
    try {
      this.setState({ isLoading: true });
      const { data } = await makeGetDishesRequest();

      this.setState({
        hasMadeRequest: true,
        isLoading: false,
        items: [...data],
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  public componentDidMount() {
    this.getAll();
  }

  public render(): React.ReactNode {
    const { children } = this.props;
    const {
      error,
      hasMadeRequest,
      isLoading,
      items,
    } = this.state;

    return children({
      error,
      hasMadeRequest,
      isLoading,
      items,
    });
  }
}

Dishes.defaultProps = {
  initial: {},
};

export { Dishes };
