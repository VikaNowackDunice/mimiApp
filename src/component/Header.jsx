import React from 'react';

function Header() {
  return (
    <div className="nav">
      <img id="userphoto" src="" alt="" />
      <div id="usercard"></div>
      {/* ... остальной код заголовка ... */}
      <a href="https://t.me/zipperwear" className="btnurl">
        {/* ... код кнопки ... */}
      </a>
      <a href="https://hyc6fv.csb.app/whois">
        <button className="search">Поиск</button>
      </a>
    </div>
  );
}

export default Header;