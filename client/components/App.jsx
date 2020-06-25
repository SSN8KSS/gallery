import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hotel: {} };
  }

  componentDidMount() {
    const splitURL = window.location.href.split('/');
    const hotelID = splitURL[splitURL.length - 1];

    axios.get(`/api/${hotelID}/photos`)
      .then( res => this.setState({ hotel: res.data }) );
  }

  render() {
    const { hotel } = this.state;
    if (!hotel.photos) {
      hotel.photos = [];
      for (let i = 0; i < 5; i++) hotel.photos.push({ URL: '' });
    }
    return (
      <div>
        <img className="main-img" alt="" src={ hotel.photos[0].URL }></img>
        <img className="img" alt="" src={ hotel.photos[1].URL }></img>
        <img className="img" alt="" src={ hotel.photos[2].URL }></img>
        <img className="img" alt="" src={ hotel.photos[3].URL }></img>
      </div>
    );
  }
}

export default App;
