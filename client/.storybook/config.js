import { addDecorator, configure } from '@storybook/react';
import { global } from 'src/index.styled';
import { withInfo } from '@storybook/addon-info';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  global();
  requireAll(require.context('..', true, /stories\.tsx?$/));
}

addDecorator(withInfo);

configure(loadStories, module);
