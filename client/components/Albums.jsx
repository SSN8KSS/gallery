import React, { Component } from 'react';
import styled from 'styled-components';

class Albums extends Component {
  getUrls() {
    // console.log('2');
    const { albums, photos } = this.props;
    const urls = [];
    if (!photos || !albums) return [ '', '', '' ]; // if page isn't loaded yet
    albums.forEach(album => {
      for (let photo of photos) {
        if ( photo.albums.includes(album) && !urls.includes(photo.url) ) {
          urls.push(photo.url);
          break;
        }
      }
    });
    return urls;
  }

  render() {
    // console.log('3');
    const { albums } = this.props;
    const urls = this.getUrls();
    return (
      <Outer>
        <Album text={albums[0]} url={urls[0]} />
        <Album text={albums[1]} url={urls[1]} />
        <Album text={albums[2]} url={urls[2]} />
      </Outer>
    );
  }
}

const Album = props => (
  <Container url={props.url}>
    <TextContainer>{ props.text }</TextContainer>
  </Container>
);

const Container = styled.div`
  margin: 1.5px 0;
  height: 157px;
  &:hover { filter: brightness(0.7) };
  background-color: rgba(74, 74, 74, 0.6);
  text-align: center;
  line-height: 157px;
  font-family: Arial;
  background-image: url(${ props => props.url });
  background-size: cover;
`;
  // filter: brightness(50%);

const TextContainer = styled.span`
  color: white;
`;

const Outer = styled.div`
  display: inline-block;
  width: 179.5px;
  height: 475px;
`;

export default Albums;
