import * as React from 'react';
import { Field, Form } from 'react-final-form';

import { makePostProductsRequest } from 'src/api/products';
import { Button } from 'src/components/atoms/Button';
import { Heading } from 'src/components/atoms/Heading';
import { Input } from 'src/components/atoms/Input';
import {
  Body as PanelBody,
  Footer as PanelFooter,
  Header as PanelHeader,
  Panel,
} from 'src/components/atoms/Panel';
import { getProductsListPath } from 'src/constants/paths';
import { Flex } from 'src/styles/decorators/Flex';
import { Margin } from 'src/styles/decorators/Margin';
import { Size } from 'src/styles/decorators/Size';
import { gutter, toPx } from 'src/styles/mixins';

/* tslint:disable:object-literal-sort-keys */
const fromRows = Object.entries({
  name: 'Name',
  proteins: 'Proteins [g]',
  fats: 'Fats [g]',
  carbohydrates: 'Carbohydrates [g]',
  calories: 'Calories [kcal]',
});
/* tslint:enable:object-literal-sort-keys */

interface IFormData {
  calories: string;
  carbohydrates: string;
  fats: string;
  name: string;
  proteins: string;
}

const ProductCreation: React.SFC = () => {
  return (
    <Form onSubmit={({
      calories,
      carbohydrates,
      fats,
      name,
      proteins,
    }: IFormData) => {
      makePostProductsRequest({
        calories,
        carbohydrates,
        fats,
        name,
        proteins,
      }).then(() => {
        window.location.replace(getProductsListPath());
      });
    }}>
      {({ handleSubmit }) => (
        <Size width="100%">
          <form onSubmit={handleSubmit}>
            <Size width="100%">
              <Panel>
                <PanelHeader>
                  <Heading priority={2}>Add product</Heading>
                </PanelHeader>
                <PanelBody>
                  {fromRows.map((
                    [propertyName, propertyValue]: [string, string],
                    index: number,
                  ) => (
                    <Margin
                      bottom={index === fromRows.length - 1 ? undefined : toPx(gutter(2))}
                      key={propertyName}
                    >
                      <div>
                        <Margin bottom={`${toPx(gutter())} !important`}>
                          <Heading priority={4}>{propertyValue}</Heading>
                        </Margin>
                        <Field name={propertyName}>
                          {(({ input }) => (
                            <Size width="100%">
                              <Input {...input} placeholder={propertyValue} />
                            </Size>
                          ))}
                        </Field>
                      </div>
                    </Margin>
                  ))}
                </PanelBody>
                <PanelFooter>
                  <Flex>
                    <div>
                      <Margin left="auto" right={toPx(gutter())}>
                        <Button primary={true} type="submit">Save</Button>
                      </Margin>
                      <Button>Cancel</Button>
                    </div>
                  </Flex>
                </PanelFooter>
              </Panel>
            </Size>
          </form>
        </Size>
      )}
    </Form>
  );
};

export { ProductCreation };
