import * as React from 'react';

import { Heading } from 'src/components/atoms/Heading';
import {
  Body as PanelBody,
  Image as PanelImage,
  Panel,
} from 'src/components/atoms/Panel';
import { Text } from 'src/components/atoms/Text';
import { getDishDetailsPath } from 'src/constants/paths';
import { Dishes } from 'src/entities/Dishes';
import { groupBy } from 'src/services/common';
import { Margin } from 'src/styles/decorators/Margin';
import { Size } from 'src/styles/decorators/Size';
import { gutter, toPx } from 'src/styles/mixins';

import { Link } from './DishesListing.styled';

const DishesListing: React.SFC = () => (
  <Dishes>
    {({ items }) => (
      Object
        .entries(groupBy(items, (value, index) => index % 4))
        .map(([column, columnItems]: [string, any[]], index: number) => (
          <Size width="25%">
            <Margin
              left={index !== 0 ? toPx(gutter()) : undefined}
              right={index !== 3 ? toPx(gutter()) : undefined}
            >
              <div key={column}>
                {columnItems.map((item: any) => (
                  <Link to={getDishDetailsPath(item.id)}>
                    <Panel>
                      {/* tslint:disable-next-line:max-line-length */}
                      <PanelImage src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                      <PanelBody>
                        <Margin bottom={`${toPx(gutter(0.5))} !important`}>
                          <Heading priority={4}>{item.name}</Heading>
                        </Margin>
                        <Text>{item.description}</Text>
                      </PanelBody>
                    </Panel>
                  </Link>
                ))}
              </div>
            </Margin>
          </Size>
        ))
    )}
  </Dishes>
);

export { DishesListing };
