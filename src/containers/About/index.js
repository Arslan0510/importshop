import React, { Component } from 'react';
import image1 from '../../assets/images/about1.png';
import image2 from '../../assets/images/about2.png';

export class index extends Component {
  render() {
    return (
      <>
        <section id='aboutUs' className='gone'>
          <div className='inner_wrapper about-us aboutUs-container fadeInLeft animated wow'>
            <div className='container'>
              <h2>About Us</h2>
              <h6>
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem
                quisci ipsum
              </h6>
              <div className='inner_section'>
                <div className='row'>
                  <div className='col-md-6'>
                    <img className='img-responsive' alt='' src={image2} align />
                  </div>
                  <div className='col-md-6'>
                    <h3>Bride’s story</h3>
                    <p>
                      Lorem ipsum dolor sit amet, quo meis voluptaria, erant
                      bonorum albucius et per, ei placerat eu, te eos porro
                      veniam. An everti maiorum detracto mea. Eu eos dicam
                      voluptaria, erant bonorum albucius et per, ei sapientem
                      accommodare est. Saepe dolorum constituam ei vel. Te sit
                      malorum ceteros repudiandae, ne tritani adipisci vis.
                    </p>
                    <h4>Hobbies </h4>
                    <ul className='about-us-list'>
                      <li className='points'>
                        Consectetur Morbi sagittis, sem quisci ipsum gravida
                        tortor
                      </li>
                      <li className='points'>
                        Morbi sagittis, sem quis lacinia faucibus, orci ipsum
                        gravida
                      </li>
                      <li className='points'>
                        Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                        sem quisci gravida
                      </li>
                      <li className='points'>
                        Sagittis, sem quis lacinia faucibus, orci ipsum gravida
                      </li>
                      <li className='points'>
                        Ipsum dolor sit amet, consectetur Morbi sagittis, sem
                        quisci
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row mrgTop30'>
                  <div className='col-md-6'>
                    <h3>Groom’s story</h3>
                    <p>
                      Lorem ipsum dolor sit amet, quo meis voluptaria, erant
                      bonorum albucius et per, ei placerat eu, te eos porro
                      veniam. An everti maiorum detracto mea. Eu eos dicam
                      voluptaria, erant bonorum albucius et per, ei sapientem
                      accommodare est. Saepe dolorum constituam ei vel. Te sit
                      malorum ceteros repudiandae, ne tritani adipisci vis.
                    </p>
                    <h4>Hobbies </h4>
                    <ul className='about-us-list'>
                      <li className='points'>
                        Consectetur Morbi sagittis, sem quisci ipsum gravida
                        tortor
                      </li>
                      <li className='points'>
                        Morbi sagittis, sem quis lacinia faucibus, orci ipsum
                        gravida
                      </li>
                      <li className='points'>
                        Lorem ipsum dolor sit amet, consectetur Morbi sagittis,
                        sem quisci gravida
                      </li>
                      <li className='points'>
                        Sagittis, sem quis lacinia faucibus, orci ipsum gravida
                      </li>
                      <li className='points'>
                        Ipsum dolor sit amet, consectetur Morbi sagittis, sem
                        quisci
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <img className='img-responsive' src={image1} alt='' align />
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
