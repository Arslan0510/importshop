import React, { Component } from 'react';
import HeaderNav from '../../components/HeaderSection/HeaderNav';

export class index extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <section id='service' style={{ overflowY: 'hidden' }} className='gone'>
          <div class='container'>
            <h2>Birthday & Stationery</h2>
            <h6>
              Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
              ipsum
            </h6>
            <div class='service_wrapper'>
              <div class='row'>
                <div class='col-md-4'>
                  <div class='service_icon delay-03s animated wow  zoomIn'>
                    <span>
                      <i class='fa fa-bitbucket'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Birthday Themes</h3>
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
                    <h3 class='animated fadeInUp wow'>Ballons</h3>
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
                    <h3 class='animated fadeInUp wow'>Candles</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-4'>
                  <div class='service_icon icon3  delay-03s animated wow zoomIn'>
                    <span>
                      <i class='fa fa-heart'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Cake Topper</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='service_icon delay-03s animated wow  zoomIn'>
                    <span>
                      <i class='fa fa-bitbucket'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Decoration & Lights</h3>
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
                    <h3 class='animated fadeInUp wow'>Goody Bags & Goodies</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-4'>
                  <div class='service_icon icon3  delay-03s animated wow zoomIn'>
                    <span>
                      <i class='fa fa-apple'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Greeting Cards</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='service_icon icon3  delay-03s animated wow zoomIn'>
                    <span>
                      <i class='fa fa-heart'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Party Fun</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div class='col-md-4'>
                  <div class='service_icon delay-03s animated wow  zoomIn'>
                    <span>
                      <i class='fa fa-bitbucket'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Wearables toys</h3>
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
