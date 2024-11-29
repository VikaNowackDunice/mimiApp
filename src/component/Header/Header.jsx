import React from 'react';

import { ReactComponent as MyIconList } from '../icon/list.svg';
import { ReactComponent as MyIconPlus } from '../icon/plus.svg';

import './style.css';

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerTest">
        <MyIconList className="iconList" />
        <h1 className="test">TEST</h1>
        <div className="conteinerPaymant">
          <p className="money">10,303.56</p>
          <div className="backPlus">
            <MyIconPlus className="iconPlus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
