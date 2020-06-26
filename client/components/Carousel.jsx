import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowButton from './ArrowButton.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currIdx: 0 };
    this.showPrev = this.showPrev.bind(this);
    this.showNext = this.showNext.bind(this);
  }

  showPrev() {
    const { currIdx } = this.state;
    const newIdx = currIdx ? currIdx - 1 : 0;
    this.setState({ currIdx: newIdx });
  }

  showNext() {
    const { photos } = this.props;
    const { currIdx } = this.state;
    const newIdx = (currIdx === photos.length - 1) ? currIdx : currIdx + 1;
    this.setState({ currIdx: newIdx });
  }

  render() {
    const { photos } = this.props;
    const { currIdx } = this.state;
    return (
      <Container>
        <ArrowButton direction="left" onClick={this.showPrev} />
        <ArrowButton direction="right" onClick={this.showNext} />
        <MainPhoto src={ photos[currIdx].URL } />
      </Container>
    );
  }
}

Carousel.propTypes = { photos: PropTypes.arrayOf(PropTypes.object) };

Carousel.defaultProps = { photos: [] };

const MainPhoto = styled.img`
  width: 609.750px;
  height: 371px;
`;

const Container = styled.div`
  width: 609.750px;
  height: 371px;
  position: relative;
`;

export default Carousel;
