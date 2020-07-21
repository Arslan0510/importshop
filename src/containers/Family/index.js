import React, { Component } from 'react';
import HeaderNav from '../../components/HeaderSection/HeaderNav';
import image1 from '../../assets/images/team01.jpg';
import image2 from '../../assets/images/team02.jpg';
import image3 from '../../assets/images/team03.jpg';
import image4 from '../../assets/images/team04.jpg';

export class index extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <section class='page_section team gone' id='team'>
          <div class='container'>
            <h2>Our Family</h2>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing.</h6>

            <div id='team' name='team'>
              <div class='container'>
                <div class='row centered'>
                  <div class='col-md-3 centered'>
                    <img
                      class='img img-circle'
                      src={image1}
                      height='120px'
                      width='120px'
                      alt=''
                    />
                    <h4>
                      <strong>Rosy Illue</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                      sem quisci ipsum gravida tortor.
                    </p>
                    <br />
                  </div>
                  <div class='col-md-3 centered'>
                    <img
                      class='img img-circle'
                      src={image2}
                      height='120px'
                      width='120px'
                      alt=''
                    />
                    <h4>
                      <b>Chrislke</b>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                      sem quisci ipsum gravida tortor.
                    </p>
                    <br />
                  </div>
                  <div class='col-md-3 centered'>
                    <img
                      class='img img-circle'
                      src={image3}
                      height='120px'
                      width='120px'
                      alt=''
                    />
                    <h4>
                      <b>Mike Reiln</b>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                      sem quisci ipsum gravida tortor.
                    </p>
                    <br />
                  </div>
                  <div class='col-md-3 centered'>
                    <img
                      class='img img-circle'
                      src={image4}
                      height='120px'
                      width='120px'
                      alt=''
                    />
                    <h4>
                      <b>Dennisel</b>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                      sem quisci ipsum gravida tortor.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default index;
