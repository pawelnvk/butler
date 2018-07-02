import * as React from 'react';

import { Img } from 'src/components/atoms/Img';
import { Wrapper } from './Image.styled';

import { Block } from 'src/styles/decorators/Block';
import { ObjectFit } from 'src/styles/decorators/ObjectFit';
import { Size } from 'src/styles/decorators/Size';

interface IImageProps {
  alt?: string;
  fixed?: boolean;
  src?: string;
}

const Image: React.SFC<IImageProps> = ({ alt, fixed, src }) => {
  if (!src) return null;

  const { height, objectFit } = fixed ? {
    height: '250px',
    objectFit: 'cover',
  } : {
    height: '',
    objectFit: '',
  };

  return (
    <Wrapper>
      <Block>
        <ObjectFit value={objectFit}>
          <Size height={height} width="100%">
            <Img alt={alt} src={src} />
          </Size>
        </ObjectFit>
      </Block>
    </Wrapper>
  );
};

Image.defaultProps = {
  alt: '',
  fixed: false,
  src: '',
};

export { Image };
