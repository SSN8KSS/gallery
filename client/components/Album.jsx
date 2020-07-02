import React from 'react';
import styled from 'styled-components';

const Album = props => {
  let { albumName, url, count } = props;
  count = count === undefined ? '' : `(${count})`;
  return (
    <Container url={url}>
      <Overlay>
        {`
          ${albumName}
          ${count}
        `}
      </Overlay>
    </Container>
  );
};

const Container = styled.div`
  margin: 1.5px 0;
  height: 157px;
  &:hover { opacity: 0.9; };
  text-align: center;
  font-family: Arial;
  background-image: url( ${props => props.url} );
  background-size: cover;
  color: white;
  white-space: pre-line;
  font-family: Poppins;
  cursor: pointer;
`;

const Overlay = styled.div`
  background-color: rgba(74, 74, 74, 0.6);
  height: 157px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Album;
