import * as React from 'react';

import {
  Input as StyledInput,
  Textarea,
} from './Input.styled';

interface IInputProps {
  name: string;
  onChange: (event: React.ChangeEvent) => void;
  textarea?: boolean;
  value?: string;
}

const Input: React.SFC<IInputProps> = ({ name, onChange, textarea, value }) => {
  const Element = textarea ? Textarea : StyledInput;

  return (
    <Element
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

Input.defaultProps = {
  textarea: false,
  value: '',
};

export { Input };
