# butler
App dedicated collecting recipes.

## Client
Client part of an app is located in `client` folder.

Before starting remember to install required node modules.

### NPM scripts
`yarn build` - building production bundle
`yarn new-atom --name Example` - creating atom component named Example
`yarn new-molecule --name Example` - creating molecule component named Example
`yarn new-organism --name Example` - creating organism component named Example
`yarn new-template --name Example` - creating template component named Example
`yarn new-view --name Example` - creating view component named Example
`yarn start` - starting development server
`yarn storybook` - starting storybook server
`yarn test` - runing tests

### Issues

There is an issue when mocking modules with help of `jest.mock`. When mocking values after importing modules it results in returning undefined instead of mocked values. It is related to improper hoisting of `jest.mock`. More informations [here](https://github.com/kulshekhar/ts-jest/issues/90).

Remember to place `jest.mock` before `import` expressions:

```
const mockBaseGutter = 12;
jest.mock('./variables', () => {
  return { baseGutter: mockBaseGutter };
});

import * as mixins from './mixins';
```
