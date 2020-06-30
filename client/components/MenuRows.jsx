import React from 'react';
import styled from 'styled-components';

const MenuRows = props => {
  const { photos, onClick, currIdx } = props;
  return (
    <Container>
      { photos.map( photo => (
        <Image
          src={photo.url}
          onClick={onClick}
          currIdx={currIdx}
          id={photo.idx}
        />
      ) ) }
    </Container>
  );
};

const Image = styled.img`
  width: 59.11px;
  height: 50px;
  object-fit: cover;
  margin: 1px;
  filter: brightness(${ props => props.currIdx === props.id ? '100%' : '50%' });
  cursor: pointer;
  background-color: white;
  &:hover { filter: brightness(100%); background-color: white };
`;

const Container = styled.div`
  width: 611.75px;
  background-color: #F2F2F2;
  display: flex;
  flex-wrap: wrap;
`;

export default MenuRows;
