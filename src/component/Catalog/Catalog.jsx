import React, { useRef } from "react";

import "./style.css";

import myImage from "../image/1.png";
import myImage1 from "../image/2.jpg";
import myImage2 from "../image/3.jpg";
import myImage3 from "../image/4.jpg";
import myImage4 from "../image/5.jpg";
import myImage5 from "../image/6.jpg";
import myImage6 from "../image/7.jpg";

import { ReactComponent as IconSearch } from "../icon/search.svg";
import { ReactComponent as IconFire } from "../icon/fire.svg";
import { ReactComponent as IconStone } from "../icon/stone.svg";
import { ReactComponent as IconDollar } from "../icon/dollar.svg";
import { ReactComponent as IconCircle } from "../icon/circle.svg";
import { ReactComponent as IconSports } from "../icon/sports.svg";


function Catalog() {
  const sliderRef = useRef(null);

  const handleMouseMove = (event) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const width = rect.width;

    const threshold = 100;
    if (mouseX < threshold) {
      slider.scrollLeft -= 5;
    } else if (mouseX > width - threshold) {
      slider.scrollLeft += 5;
    }
  };

  return (
    <div className="catalog-container">
      <div className="sectionGameCatalog">
        {/* Главная секция */}
        <section className="content">
          <div className="image-container">
            <img className="itemImgWarrior" src={myImage} alt="Welcome Bonus" />
            <div className="text-overlay">
              <h3 className="welcomText">Welcome Bonus</h3>
              <p className="textP">
                100% up to 2 500 ₽ + 100 Free <br /> Spins
              </p>
            </div>
            <button className="buttonRead">Read More</button>
          </div>
        </section>

        {/* Слайдер кнопок */}
        <section className="sliderMidle">
          <div className="search">
            <IconSearch className="iconSearch" />
          </div>
          <div
            className="gameSlider"
            ref={sliderRef}
            onMouseMove={handleMouseMove}
          >
            {["All Games", "New Games", "All Slots", "Live Games", "Popular"].map(
              (text) => (
                <button key={text} className="buttonGame">
                  {text}
                </button>
              )
            )}
          </div>
        </section>

      {/* Популярные игры */}
      <div className="allSectionGame">
          <section className="gamesPopelarChapter">
            <div className="headPopular">
              <IconFire className="iconFire" />
              <h1 className="popularHeader">Popular Games</h1>
              <p className="popularP">View All</p>
            </div>
            <div className="chapterPopular">
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
          </section>

          {/* Новые игры */}
          <section className="gamesNewChapter">
            <div className="headNew">
              <IconStone className="iconStone" />
              <h1 className="newHeader">New Games</h1>
              <p className="newP">View All</p>
            </div>
            <div className="chapterNew">
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
          </section>

          
          {/* Казино игры */}
          <section className="gamesCasinoChapter">
            <div className="headCasino">
              <IconDollar className="iconDollar" />
              <IconCircle className='iconCircle'/>
              <h1 className="casinoHeader">Casino Games</h1>
              <p className="casinoP">View All</p>
            </div>
            <div className="chapterCasino">
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
          </section>

          {/* Спорт игры */}
          <section className="gamesSportsChapter">
            <div className="headSports">
              <IconSports className='iconSports'/>
              <h1 className="sportsHeader">Sports Games</h1>
              <p className="sportsP">View All</p>
            </div>
            <div className="chapterSports">
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
