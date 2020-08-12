import React, { Component } from 'react';
import Card from '../card';
import img from '../../assets/detailImages/image.jpg';
import img2 from '../../assets/detailImages/image2.jpg';
import img3 from '../../assets/detailImages/image3.jpg';

class OfficeStationery extends Component {
  render() {
    return (
      <div className='gone container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <Card
              image={img}
              cardTitle='Card Title'
              description='lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
          </div>
          <div className='col-md-4'>
            <Card
              image={img2}
              cardTitle='Card Title'
              description='lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
          </div>
          <div className='col-md-4'>
            <Card
              image={img3}
              cardTitle='Card Title'
              description='lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeStationery;
