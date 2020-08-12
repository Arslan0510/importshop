import React, { Component } from 'react';

export class index extends Component {
  render() {
    return (
      <>
        <section id='service' className='gone'>
          <div class='container'>
            <h2>Makeup</h2>
            <h6>
              Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
              ipsum
            </h6>
            <div class='service_wrapper_electronics'>
              <div class='row'>
                <div class='col-md-4'>
                  <div class='service_icon delay-03s animated wow  zoomIn'>
                    <span>
                      <i class='fa fa-bitbucket'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Face</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='service_icon icon2  delay-03s animated wow zoomIn'>
                    <span>
                      <i class='fa fa-bank'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Lips</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='service_icon icon3  delay-03s animated wow zoomIn'>
                    <span>
                      <i class='fa fa-apple'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Nails</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
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
