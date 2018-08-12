import * as React from 'react';
import { match } from 'react-router';

import { Heading } from 'src/components/atoms/Heading';
import {
  Body as PanelBody,
  Header as PanelHeader,
  Image as PanelImage,
  Panel,
} from 'src/components/atoms/Panel';
import { Text } from 'src/components/atoms/Text';
import { Dishes } from 'src/entities/Dishes';
import { groupBy } from 'src/services/common';
import { Margin } from 'src/styles/decorators/Margin';
import { gutter, toPx } from 'src/styles/mixins';
import { List } from '../../atoms/List';

interface IDishDetailsProps {
  match: match<{ id: string }>;
}

const DishDetails: React.SFC<IDishDetailsProps> = ({ match: { params: { id } } }) => {
  return (
    <Dishes id={id}>
      {({ items }) => console.log(items[0]) || items[0] ? (
        <Panel>
          <PanelHeader>
            <Heading priority={2}>{items[0].name}</Heading>
          </PanelHeader>
          {/* tslint:disable-next-line:max-line-length */}
          <PanelImage fixed={true} src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <PanelBody>
            <Margin bottom={toPx(gutter(2))}>
              <div>
                <Margin bottom={`${toPx(gutter())} !important`}>
                  <Heading priority={4}>Description</Heading>
                </Margin>
                <Text>{items[0].description}</Text>
              </div>
            </Margin>
            <Margin bottom={toPx(gutter(2))}>
              <div>
                <Margin bottom={`${toPx(gutter())} !important`}>
                  <Heading priority={4}>Ingredients</Heading>
                </Margin>
                {Object.entries(groupBy(items[0].ingredients, (value, index) => index % 2))
                  .map(([column, columnItems]: [string, any[]], index: number) => (
                    <List>
                      {columnItems.map((item: any) => (
                        <React.Fragment key={item.id}>
                          {item.product.name} - {item.weight} g
                        </React.Fragment>
                      ))}
                    </List>
                  ))
                }
              </div>
            </Margin>
            <div>
              <Margin bottom={`${toPx(gutter())} !important`}>
                <Heading priority={4}>Recipe</Heading>
              </Margin>
              <Text>{items[0].recipe}</Text>
            </div>
          </PanelBody>
        </Panel>
      ) : (
          null
        )}
    </Dishes>
  );
};

export { DishDetails };
