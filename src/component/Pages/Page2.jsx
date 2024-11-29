import React from "react";
import { Link } from "react-router-dom";

import myImage1 from "../image/2.jpg";
import myImage2 from "../image/3.jpg";
import myImage3 from "../image/4.jpg";
import myImage4 from "../image/5.jpg";
import myImage5 from "../image/6.jpg";
import myImage6 from "../image/7.jpg";

import { ReactComponent as MyIconMark } from '../icon/mark.svg';

import './style.css';

function Page2() {
  
    return (
        <div className="popularContainer">
          <div className="headerPopular">
          <div className="iconWrapper">
            <Link to="/">
            <MyIconMark className="iconMark" />
            </Link>
          </div>
            <h1 className="popularGames">Popular Games</h1>
          </div>
          <div className="headerGame">
            <input className="searchGame" value='Search Game' />
            <button className="buttonLucky">I’m Feeling Lucky</button>
            <button className="provider">Providers</button>
            <MyIconMark className="iconMark2" />
            <button className="alphabet">A-Z</button>
            <MyIconMark className="iconMark3" />
          </div>
              <div className="selectingSearcing">
                <div className="chapterGames">
                {[myImage2, myImage3, myImage4, myImage5, myImage6, myImage1].map(
                  (image, index) => (
                    <img
                      key={index}
                      className="itemImgGames"
                      src={image}
                      alt={`Game ${index + 1}`}
                    />
                  )
                )}
              </div>
            </div>
        </div>
      );
}

export default Page2;