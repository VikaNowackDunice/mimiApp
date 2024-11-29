import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as IconLegal } from "../icon/legal.svg";
import { ReactComponent as IconCasinoContent } from "../icon/contentCasino.svg";
import { ReactComponent as Icon2 } from "../icon/nav-item1.svg";
import { ReactComponent as Icon3 } from "../icon/nav-item2.svg";
import { ReactComponent as Icon4 } from "../icon/nav-item3.svg";

import './style.css';

function Footer() {
  return (
    <div className="footerContainer">
      <section className="footerGames">
        <div className="footSection">
          <p>About</p>
          <p>Auction Terms</p>
          <p>Casino Bonus Terms</p>
          <p>Sportsbook Bonus Terms</p>
          <p>Terms & Conditions</p>
          <p>Security & Privacy</p>
          <p>Payments</p>
          <p>Certificates</p>
          <p>Game Explanations</p>
          <p>Responsible Gaming</p>
          <p>Condor-Affiliates</p>
        </div>
        <div className="fotterWarrior">
          <IconLegal className='iconLegal'/>
        </div>
        <div className='copyRight'>Copyright© 2024</div>
      </section>

      {/* FooterEnd */}
      <section className="footerGamesEnd">
        <div className="fotterSectionEnd">
          <div className="iconWrapper">
            <Icon2 className="iconContent" />
          </div>
          <div className="iconWrapper">
            <Link to="/page2">
              <IconCasinoContent className="iconContent" />
            </Link>
          </div>
          <div className="iconWrapper">
            <Icon3 className="iconContent" />
          </div>
          <div className="iconWrapper">
            <Icon4 className="iconContent" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;