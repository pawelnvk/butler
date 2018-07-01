import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Icon } from './Icon';
import {
  CHEVRON_ICON,
  DRAGGABLE_ICON,
  LOGO_ICON,
  PLUS_ICON,
  SEARCH_ICON,
  TRASH_ICON,
} from './Icon.constants';

storiesOf('Icon', module)
  .add('chevron', () => (
    <Icon icon={CHEVRON_ICON} />
  ))
  .add('draggable', () => (
    <Icon icon={DRAGGABLE_ICON} />
  ))
  .add('logo', () => (
    <Icon icon={LOGO_ICON} />
  ))
  .add('plus', () => (
    <Icon icon={PLUS_ICON} />
  ))
  .add('search', () => (
    <Icon icon={SEARCH_ICON} />
  ))
  .add('trash', () => (
    <Icon icon={TRASH_ICON} />
  ));
