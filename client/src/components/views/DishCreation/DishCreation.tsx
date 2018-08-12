import arrayMutators from 'final-form-arrays';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

import { makePostDishRequest } from 'src/api/dishes';
import { Button } from 'src/components/atoms/Button';
import { Heading } from 'src/components/atoms/Heading';
import { Input } from 'src/components/atoms/Input';
import {
  Body as PanelBody,
  Footer as PanelFooter,
  Header as PanelHeader,
  Panel,
} from 'src/components/atoms/Panel';
import { Text } from 'src/components/atoms/Text';
import {
  CardTable,
  CardTableCell,
  CardTableRow,
} from 'src/components/organisms/CardTable';
import { getDishesListPath } from 'src/constants/paths';
import { Products } from 'src/entities/Products';
import { Flex } from 'src/styles/decorators/Flex';
import { Margin } from 'src/styles/decorators/Margin';
import { Size } from 'src/styles/decorators/Size';
import { TextAlign } from 'src/styles/decorators/TextAlign';
import { gutter, toPx } from 'src/styles/mixins';

interface IFormData {
  description: string;
  ingredients: any[];
  name: string;
  recipe: string;
}

const DishCreation: React.SFC = () => (
  <Form
    mutators={{
      ...arrayMutators,
    }}
    onSubmit={({
      description,
      ingredients,
      name,
      recipe,
    }: IFormData) => {
      makePostDishRequest({
        description,
        ingredients,
        name,
        recipe,
      }).then(() => {
        window.location.replace(getDishesListPath());
      });
    }}
  >
    {({
      handleSubmit,
      mutators: { push },
      values,
    }) => (
        <Size width="100%">
          <form onSubmit={handleSubmit}>
            <Size width="100%">
              <Panel>
                <PanelHeader>
                  <Heading priority={2}>Add dish</Heading>
                </PanelHeader>
                <PanelBody>
                  <Margin bottom={toPx(gutter(2))}>
                    <div>
                      <Margin bottom={`${toPx(gutter())} !important`}>
                        <Heading priority={4}>Name</Heading>
                      </Margin>
                      <Field name="name">
                        {(({ input }) => (
                          <Size width="100%">
                            <Input {...input} placeholder="Name" />
                          </Size>
                        ))}
                      </Field>
                    </div>
                  </Margin>
                  <Margin bottom={toPx(gutter(2))}>
                    <div>
                      <Margin bottom={`${toPx(gutter())} !important`}>
                        <Heading priority={4}>Description</Heading>
                      </Margin>
                      <Field name="description">
                        {(({ input }) => (
                          <Size width="100%">
                            <Input {...input} placeholder="Description" textarea={true} />
                          </Size>
                        ))}
                      </Field>
                    </div>
                  </Margin>
                  <Margin bottom={toPx(gutter(2))}>
                    <div>
                      <Margin bottom={`${toPx(gutter())} !important`}>
                        <Heading priority={4}>Ingredients</Heading>
                      </Margin>
                      <Margin bottom={toPx(gutter())}>
                        <div>
                          <FieldArray name="ingredients">
                            {({ fields }: { fields: any[] }) => (
                              <CardTable>
                                {fields.map((name, index) => (
                                  <CardTableRow>
                                    <Field
                                      key={name}
                                      name={`${name}.id`}
                                    >
                                      {({ input: { value: id } }) => (
                                        <Field
                                          name={`${name}.weight`}
                                        >
                                          {({ input: { value: weight } }) => (
                                            <Products id={id}>
                                              {({ items }) => items[0] ? (
                                                <React.Fragment>
                                                  <CardTableCell>
                                                    <Text>{items[0].name}</Text>
                                                  </CardTableCell>
                                                  {/* tslint:disable:object-literal-sort-keys */}
                                                  {Object.entries({
                                                    proteins: items[0].proteins,
                                                    fats: items[0].fats,
                                                    carbohydrates: items[0].carbohydrates,
                                                    calories: items[0].calories,
                                                  }).map((
                                                    [propName, propValue]: [string, number],
                                                  ) => (
                                                      <TextAlign key={propName} align="center">
                                                        <Size width="100px">
                                                          <CardTableCell>
                                                            <Text>{propValue * weight}</Text>
                                                          </CardTableCell>
                                                        </Size>
                                                      </TextAlign>
                                                    ))}
                                                  {/* tslint:enable:object-literal-sort-keys */}
                                                </React.Fragment>
                                              ) : (
                                                  null
                                                )}
                                            </Products>
                                          )}
                                        </Field>
                                      )}
                                    </Field>
                                  </CardTableRow>
                                ))}
                              </CardTable>
                            )}
                          </FieldArray>
                        </div>
                      </Margin>
                      <Flex>
                        <div>
                          <Field name="newIngredient">
                            {(({ input }) => (
                              <Products>
                                {({ items }) => (
                                  <Size width="100%">
                                    <select {...input}>
                                      {items.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                      ))}
                                    </select>
                                  </Size>
                                )}
                              </Products>
                            ))}
                          </Field>
                          <Field name="newWeight">
                            {(({ input }) => (
                              <Margin left={`${toPx(gutter())}`}>
                                <Size width="100%">
                                  <Input {...input} placeholder="weight" />
                                </Size>
                              </Margin>
                            ))}
                          </Field>
                          <Margin left={`${toPx(gutter())}`}>
                            <Button
                              onClick={() => push('ingredients', {
                                id: values.newIngredient,
                                weight: values.newWeight,
                              })}
                              primary={true}
                              small={true}
                            >
                              Add
                          </Button>
                          </Margin>
                        </div>
                      </Flex>
                    </div>
                  </Margin>
                  <Margin>
                    <div>
                      <Margin bottom={`${toPx(gutter())} !important`}>
                        <Heading priority={4}>Recipe</Heading>
                      </Margin>
                      <Field name="recipe">
                        {(({ input }) => (
                          <Size width="100%">
                            <Input {...input} placeholder="Recipe" textarea={true} />
                          </Size>
                        ))}
                      </Field>
                    </div>
                  </Margin>
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

export { DishCreation };
