import React from 'react';
import styled from 'styled-components';

const ArrowButton = props => {
  const { onClick, direction } = props;
  return direction === 'left'
    ? <LeftArrow onClick={onClick} src="https://i.imgur.com/FA2do8p.png" />
    : <RightArrow onClick={onClick} src="https://i.imgur.com/fCnSxJb.png" />;
};

const LeftArrow = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 155px;
  opacity: 60%;
  border-radius: 5%;
  &:hover { opacity: 90%; }
`;

const RightArrow = styled(LeftArrow)`
  right: 0;
`;

export default ArrowButton;
