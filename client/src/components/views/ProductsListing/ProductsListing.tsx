import * as React from 'react';

import { Heading } from 'src/components/atoms/Heading';
import { Text } from 'src/components/atoms/Text';
import {
  CardTable,
  CardTableCell,
  CardTableHeading,
  CardTableRow,
} from 'src/components/organisms/CardTable';
import { Products } from 'src/entities/Products';
import { Size } from 'src/styles/decorators/Size';
import { TextAlign } from 'src/styles/decorators/TextAlign';

const ProductsListing: React.SFC = () => (
  <Products>
    {({ items }) => (
      <CardTable>
        <CardTableHeading
          names={['Name', 'Proteins [g]', 'Fats [g]', 'Carbohydrates [g]', 'Calories [kcal]']}
        />
        {items.map(({ calories, carbohydrates, fats, id, name, proteins }) => (
          <CardTableRow key={id}>
            <CardTableCell>
              <Heading priority={3}>{name}</Heading>
            </CardTableCell>
            {/* tslint:disable:object-literal-sort-keys */}
            {Object.entries({
              proteins,
              fats,
              carbohydrates,
              calories,
            }).map(([propName, propValue]: [string, number]) => (
              <TextAlign key={propName} align="center">
                <Size width="100px">
                  <CardTableCell>
                    <Text>{propValue}</Text>
                  </CardTableCell>
                </Size>
              </TextAlign>
            ))}
            {/* tslint:enable:object-literal-sort-keys */}
          </CardTableRow>
        ))}
      </CardTable>
    )}
  </Products>
);

export { ProductsListing };
