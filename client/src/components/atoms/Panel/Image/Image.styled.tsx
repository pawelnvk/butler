import styled, { css } from 'styled-components';

const fixedImage = css`
  height: 250px;
  object-fit: cover;
`;

interface IWrapperProps {
  fixed?: boolean;
}

export const Wrapper = styled.div`
  margin: -1px;
  ${(props: IWrapperProps) => props.fixed ? fixedImage : ''}
`;
