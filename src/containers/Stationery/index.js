import React, { Component } from 'react';
import { OfficeStationery } from '../../components/OfficeStationery';

export class index extends Component {
  handleOffice = () => {
    this.props.history.push('office-stationery');
  };
  render() {
    return (
      <>
        <section id='service' className='gone'>
          <div class='container'>
            <h2>Stationery</h2>
            <h6>
              Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
              ipsum
            </h6>
            <div class='service_wrapper'>
              <div class='row'>
                <div class='col-md-4'>
                  <div
                    class='service_icon delay-03s animated wow  zoomIn'
                    onClick={this.handleOffice}
                  >
                    <span>
                      <i class='fa fa-bitbucket'></i>
                    </span>
                  </div>
                  <div class='service_block'>
                    <h3 class='animated fadeInUp wow'>Office Stationery</h3>
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
                    <h3 class='animated fadeInUp wow'>School Stationery</h3>
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
                    <h3 class='animated fadeInUp wow'>Diaries</h3>
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
                    <h3 class='animated fadeInUp wow'>
                      Cutter / Scissors / Knives
                    </h3>
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
                    <h3 class='animated fadeInUp wow'>Colors & Markers</h3>
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
                    <h3 class='animated fadeInUp wow'>Yalong Stationery</h3>
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
