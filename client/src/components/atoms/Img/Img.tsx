import * as React from 'react';

export const EMPTY_IMG = (
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
);

interface IImgProps {
  alt?: string;
  className?: string;
  src?: string;
}

const Img: React.SFC<IImgProps> = ({ alt, className, src }) => {
  return <img alt={alt} className={className} src={src} />;
};

Img.defaultProps = {
  alt: '',
  className: '',
  src: EMPTY_IMG,
};

export { Img };
