import React, { Component } from 'react';
import HeaderSection from '../../components/HeaderSection';

export class index extends Component {
  render() {
    return (
      <>
        <HeaderSection />
        <section id='service'>
          <div class='container'>
            <h2>Our Program</h2>
            <h6>
              Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
              ipsum
            </h6>
            <div class='service_wrapper'>
              <div class='row'>
                <div class='col-md-3'>
                  <div class='service_icon delay-03s animated wow  zoomIn'>
                    {' '}
                    <span>
                      <i class='fa fa-bitbucket'></i>
                    </span>{' '}
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Bachelor Party</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </p>
                  </div>
                </div>
                <div class='col-md-3'>
                  <div class='service_icon icon2  delay-03s animated wow zoomIn'>
                    {' '}
                    <span>
                      <i class='fa fa-bank'></i>
                    </span>{' '}
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Wedding</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </p>
                  </div>
                </div>
                <div class='col-md-3'>
                  <div class='service_icon icon3  delay-03s animated wow zoomIn'>
                    {' '}
                    <span>
                      <i class='fa fa-apple'></i>
                    </span>{' '}
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Cocktail Dinner</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </p>
                  </div>
                </div>
                <div class='col-md-3'>
                  <div class='service_icon icon3  delay-03s animated wow zoomIn'>
                    {' '}
                    <span>
                      <i class='fa fa-heart'></i>
                    </span>{' '}
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Reception</h3>
                    <p class='animated fadeInDown wow'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
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
