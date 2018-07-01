---
to: src/components/<%= scope %>/<%= name %>/<%= name %>.tsx
---
import * as React from 'react';

import { Example } from './<%= name %>.styled';

interface I<%= name %>Props {
}

const <%= name %>: React.SFC<I<%= name %>Props> = (props) => {
  return <Example />;
};

export { <%= name %> };
