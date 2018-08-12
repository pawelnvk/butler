import * as React from 'react';

import {
  makeGetProductRequest,
  makeGetProductsRequest,
} from 'src/api/products';

interface IChildrenArguments {
  error: any;
  hasMadeRequest: boolean;
  isLoading: boolean;
  items: any[];
}
interface IProductsProps {
  children: (args: IChildrenArguments) => React.ReactNode;
  id?: string;
}

class Products extends React.Component<IProductsProps, any> {
  public static defaultProps = {
    id: null,
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
      const { data } = await makeGetProductsRequest();

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

  public async getOne(id: string) {
    try {
      this.setState({ isLoading: true });
      const { data } = await makeGetProductRequest(id);

      this.setState({
        hasMadeRequest: true,
        isLoading: false,
        items: [data],
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  }

  public componentDidMount() {
    const { id } = this.props;

    if (id) {
      this.getOne(id);
    } else {
      this.getAll();
    }
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

export { Products };
