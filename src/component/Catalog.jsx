import React from 'react';

const catalogItems = [
  {
    imageUrl: 'https://i.siteapi.org/WQ8jOyCV-NT_8et3WWGlXHoPwf4=/61x239:926x610/fit-in/312x240/filters:fill(transparent):format(png)/fcf6ebfc2dd944c.s2.siteapi.org/img/eisehlfrj688c8w0gs4sc00g04cgko',
    productName: 'Vans Old Skool',
    price: '12 129',
    buyUrl: 'https://hyc6fv.csb.app/search.html',
  },
  {
    imageUrl: 'https://gosneakers.ru/wa-data/public/shop/products/76/15/1576/images/6315/6315.440@2x.jpg',
    productName: 'Nike Air Force 1 Low 07 White',
    price: '12 129',
    buyUrl: 'https://hyc6fv.csb.app/search.html',
  },
  // Добавьте больше элементов здесь...
];

function CatalogItem({ imageUrl, productName, price, buyUrl }) {
  return (
    <div className="content-wears">
      <div className="item">
        <img className="itemimg" src={imageUrl} alt={productName} />
      </div>
      <div className="one">
        <h3 className="item-price"><b>{price}</b></h3>
        <p className="item-text">{productName}</p>
        <div className="operations">
          <a href={buyUrl} className="buy">
            <button>Купить</button>
          </a>
        </div>
      </div>
    </div>
  );
}


function Catalog() {
  return (
    <div className="catalog-container">
      <div className="content">
        {catalogItems.map((item, index) => (
          <CatalogItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;