import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Image } from './Image';
import { Panel } from './Panel';

storiesOf('Atoms/Panel', module)
  .add('default', () => (
    <Panel>
      <Header>Header content</Header>
      <Image alt="bird" src="http://freeaussiestock.com/free/Australiana/slides/kookaburra.jpg" />
      <Body>Body content</Body>
      <Footer>Footer content</Footer>
    </Panel>
  ))
  .add('fixed image height', () => (
    <Panel>
      <Header>Header content</Header>
      <Image
        alt="bird"
        fixed={true}
        src="http://freeaussiestock.com/free/Australiana/slides/kookaburra.jpg"
      />
      <Body>Body content</Body>
      <Footer>Footer content</Footer>
    </Panel>
  ));
