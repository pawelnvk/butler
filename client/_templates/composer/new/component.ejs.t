---
to: src/composers/<%= name %>/<%= name %>.tsx
---
import * as React from 'react';

interface I<%= name %>Props {
  children: () => React.ReactNode;
}
interface I<%= name %>State {
}

class <%= name %> extends React.Component<I<%= name %>Props, I<%= name %>State> {
  public state = {

  }

  public render() {
    const { children } = this.props;

    return children();
  }
}

export { <%= name %> };
