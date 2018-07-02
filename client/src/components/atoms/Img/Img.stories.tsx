import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Img } from './Img';

storiesOf('Atoms/Img', module)
  .add('empty', () => (
    <Img />
  ))
  .add('default', () => (
    <Img alt="bird" src="http://freeaussiestock.com/free/Australiana/slides/kookaburra.jpg" />
  ));
