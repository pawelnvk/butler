import * as React from 'react';

import {
  Input as StyledInput,
  Textarea,
} from './Input.styled';

interface IInputProps {
  className?: string;
  name: string;
  onChange: (event: React.ChangeEvent) => void;
  placeholder?: string;
  textarea?: boolean;
  value?: string;
}

const Input: React.SFC<IInputProps> = ({
  className,
  name,
  onChange,
  placeholder,
  textarea,
  value,
}) => {
  const Element = textarea ? Textarea : StyledInput;

  return (
    <Element
      className={className}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  textarea: false,
  value: '',
};

export { Input };
