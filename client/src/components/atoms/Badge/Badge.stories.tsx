// import { action } from '@storybook/addon-actions';
import { storiesOf, Story } from '@storybook/react';
import * as React from 'react';

import { Badge } from './Badge';
import { COLOR_GRAY } from './Badge.constants';

interface IStory extends Story {
  addParameters: (options: any) => Story;
}

const onClick = () => null;
const stories = storiesOf('Atoms/Badge', module) as IStory;

stories
  .addParameters({ info: { inline: true } })
  .add('default', () => (
    <Badge>Badge</Badge>
  ))
  .add('clickable', () => (
    <Badge onClick={onClick}>Badge</Badge>
  ))
  .add('gray', () => (
    <Badge color={COLOR_GRAY}>Badge</Badge>
  ));
