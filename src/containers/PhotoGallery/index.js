import React, { Component } from 'react';
import HeaderNav from '../../components/HeaderSection/HeaderNav';
import image1 from '../../assets/images/portfolio_pic1.jpg';
import image2 from '../../assets/images/portfolio_pic2.jpg';
import image3 from '../../assets/images/portfolio_pic3.jpg';
import image4 from '../../assets/images/portfolio_pic4.jpg';
import image5 from '../../assets/images/portfolio_pic5.jpg';
import image6 from '../../assets/images/portfolio_pic6.jpg';
import image7 from '../../assets/images/portfolio_pic7.jpg';
import image8 from '../../assets/images/portfolio_pic8.jpg';

export class index extends Component {
  render() {
    return (
      <>
        <HeaderNav />
        <section id='Portfolio' class='content'>
          <div class='container portfolio_title'>
            <div class='section-title'>
              <h2>Photo Gallery</h2>
              <h6>
                Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem
                quisci ipsum
              </h6>
            </div>
          </div>
          <div class='portfolio-top'></div>
          <div class='portfolio'>
            <div
              id='filters'
              class='sixteen columns'
              style={{ display: 'none' }}
            >
              <ul class='clearfix'>
                <li>
                  <a id='all' href='/#' data-filter='*' class='active'>
                    <h5>All</h5>
                  </a>
                </li>
                <li>
                  <a class='' href='/#' data-filter='.prototype'>
                    <h5>Prototype</h5>
                  </a>
                </li>
                <li>
                  <a class='' href='/#' data-filter='.design'>
                    <h5>Design</h5>
                  </a>
                </li>
                <li>
                  <a class='' href='/#' data-filter='.android'>
                    <h5>Android</h5>
                  </a>
                </li>
                <li>
                  <a class='' href='/#' data-filter='.appleIOS'>
                    <h5>Apple IOS</h5>
                  </a>
                </li>
                <li>
                  <a class='' href='/#' data-filter='.web'>
                    <h5>Web App</h5>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class='isotope fadeInLeft animated wow grid'
              style={{ position: 'relative', overflow: 'hidden', height: 450 }}
              id='portfolio_wrapper'
            >
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four   appleIOS isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image1} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image1} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(337px, 0px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four  design isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image2} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image2} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(674px, 0px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four  design  isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image3} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image3} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(1011px, 0px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four  android  prototype web isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image4} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image4} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(0px, 225px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four  design isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image5} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image5} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(337px, 225px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four  web isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image6} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image6} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(674px, 225px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four  design web isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image7} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image7} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
              <figure
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  transform: 'translate3d(1011px, 225px, 0px) scale3d(1, 1, 1)',
                  width: 337,
                  opacity: 1,
                }}
                class='portfolio-item one-four   android isotope-item effect-oscar'
              >
                <div class='portfolio_img'>
                  <img src={image8} alt='Portfolio 1' />
                </div>
                <figcaption>
                  <div>
                    <a href={image8} class='fancybox'>
                      <h2>
                        Warm <span>Oscar</span>
                      </h2>
                      <p>
                        Oscar is a decent man. He used to clean porches with
                        pleasure.
                      </p>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class='portfolio_btm'></div>

          <div id='project_container'>
            <div class='clear'></div>
            <div id='project_data'></div>
          </div>
        </section>
      </>
    );
  }
}

export default index;
