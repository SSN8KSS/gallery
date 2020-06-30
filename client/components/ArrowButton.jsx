import React from 'react';
import styled from 'styled-components';

const ArrowButton = props => {
  const { onClick, direction, idx, length } = props;
  if (direction === 'left') {
    if (idx === 0) return <div />;
    return <LeftArrow onClick={onClick} src="https://i.imgur.com/FA2do8p.png" />;
  }
  if (idx === length - 1) return <div />;
  return <RightArrow onClick={onClick} src="https://i.imgur.com/fCnSxJb.png" />;
};

const LeftArrow = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 155px;
  opacity: 60%;
  border-radius: 8%;
  &:hover { opacity: 90%; }
`;

const RightArrow = styled(LeftArrow)`
  right: 0;
`;

export default ArrowButton;
