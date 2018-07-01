import * as React from 'react';

import { Text } from 'src/components/atoms/Text';
import {
  OrderedList,
  OrderedListItem,
  UnorderedList,
  UnorderedListItem,
} from './List.styled';

interface IListProps {
  children: React.ReactNodeArray;
  className?: string;
  ordered?: boolean;
}

const List: React.SFC<IListProps> = ({ children, className, ordered }) => {
  const ListElement = ordered ? OrderedList : UnorderedList;
  const ListItemElement = ordered ? OrderedListItem : UnorderedListItem;

  const listElements = children.map((child: React.ReactElement<any>) => {
    const key = child.key === null ? undefined : child.key;

    return (
      <ListItemElement key={key}>
        <Text inline={true}>{child}</Text>
      </ListItemElement>
    );
  });

  return (
    <ListElement className={className}>{listElements}</ListElement>
  );
};

List.defaultProps = {
  className: '',
  ordered: false,
};

export { List };
