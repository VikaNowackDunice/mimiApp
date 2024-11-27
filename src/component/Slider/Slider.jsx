import React from 'react';
import './style.css';

function Slider() {

  return (
      <div className="slider">
              <div className="slider-list">
                <div className="slider-track">
                  <div className="slide">
                    <a target="_blank" href="https://t.me/zipperwear">
                      <img
                        src="https://c0diecypher.github.io/yyyevar.github.io/icons/image_2023-07-24_19-48-52.png"
                        className="slide"
                      />
                    </a>
                  </div>
                  <div className="slide">
                    <a className="" href="https://t.me/zipperwear">
                      <img
                        src="https://c0diecypher.github.io/yyyevar.github.io/icons/image_2023-07-24_19-49-38.png"
                        className="slide"
                      />
                    </a>
                  </div>
                  <div className="slide">
                    <a className="" href="">
                      <img
                        src="https://c0diecypher.github.io/yyyevar.github.io/icons/image_2023-07-24_19-49-52.png"
                        className="slide"
                      />
                    </a>
                  </div>
                  <div className="slide"></div>
                  <div className="slide"></div>
                </div>
              </div>
            </div>
  );
}

export default Slider;

