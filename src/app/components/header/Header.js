import React from 'react';
import './header.sass';

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showHeaderMenu: false,
      nav: [
        {
          name: 'Обучающее видео',
          href: '#'
        },        {
          name: 'Оформление заказа',
          href: '#'
        },        {
          name: 'Оплата',
          href: '#'
        },        {
          name: 'Доставка',
          href: '#'
        },        {
          name: 'Гарантия',
          href: '#'
        },        {
          name: 'Возврат',
          href: '#'
        },        {
          name: 'Контакты',
          href: '#'
        },        {
          name: 'Партнерам',
          href: '#'
        },
      ]
    }
  }

  setShowHeaderMenu = () => {
    this.setState({ showHeaderMenu: !this.state.showHeaderMenu})
  }

  render() {
    const { nav, showHeaderMenu } = this.state;
    return (
      <section className="header">
        <div className="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 28" width="147" height="49">
            <defs>
              <image width="84" height="28" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAcCAMAAADIvmjyAAAAAXNSR0IB2cksfwAAAbxQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7HYGfwAAAJR0Uk5TB57W09rxAQBg/4Ff6UQ8QCdYgHh/bhMUCQ0CCBUgIgULKDYyESwzNA/DqQ5ky3mZvASzzZaY1HK9RUdIdJVq9fnGZlu6UbBsdY3t8yYMrna1tlKEG3FpSwNJTTsqIz/cgx+xfTXYwUaSWu/7HRgvHlVZU6Bwk+EKBo9t52MwGlBPGUFUJCE4fIrlEC4SHBdeOj5MFiWXUw0AAAKwSURBVHic7ZXpWxJRFIfHbY6/XFIIkGEJVNwzqdwNS000owwhB7cyLVu0rEipNFJBFLeWf7g7zICk41OP4rfeD/c5555731nunTscl5Wdo0JuHk+nhsuHOhdO7ySuACgsKj7KxZIzOIkrBTRnEZwk1Z6H9NJ/acaluvOQZukNMmVERkEpmMx61lqslw/H2uzlCSr0cl7pqEpQbWVJTXKU0cxJ0hS1RHV59XJNA/AkABUpZwOuNGolrqLJSSRcw/UbEs3NRayKFqc8LAetkrStvaMzgYWoCzflmgvdPPG3kPq0KgGTEt5GD1EvstMfuQ935KAfBZLUnVYbwKAc9OAukw7hXrJiATxKeF9a2wcYTpc+hFcO6tB7dPUHMHKC1Acob4aG4Sd6hLY/paOZkoqBsbHxicnMSvmpQKAfyKxUogSP/yJtxBM5aFCkk8nK9OFCPcWMdPkmOZvFM9Y+x9yJ0hdolIOXeMX26WvMJysLAKeEfWhNu9M3KGRtCwJymnVc+hYoZbu2YxHS5ueBoXfvFxl2og/I1gX9waD7I5aWiUK5+OT2+z93sTFsouULXAUrKyv5S8elZOxsdbvdLp23aJVlX+3j4W8SUrK2zuwbG4vhSOKnyEdHvVLHpj3xWnjfrETVsIr0zMSYtAfJDzMdq+Efpvuq1Hq3mHRsezt4rBDfCY1Wm4Uyo4Ordxh394iPm2zrvoVlO034nJb6EO2XiRZu0qYiHcEBp9LNDg+bcd/Q+D1q3lw3OwIGnUi1hmmjXzPoiDscNeEfcz91eiFGngmVuc3slFKV6vXcgZ3T2Or3p5ZN7vYNkbS/5ou1FqcYqfFsxCp2IuW+cMDm3VPGr2pmYgpb6F5Tl/K8x2UTOokXnMSLoTjrEsWodF4LPC/uSoEzQtxa6iYmowrWqFGk35L6w8DMXnbvAAAAAElFTkSuQmCC" />
            </defs>
            <style>
            </style>
            <use id="Layer 1" href="#img1" x="0" y="0" />
          </svg>
        </div>
        <div className="header-right-wrap">
          <div className="header-cart">
            
						<span className="cart-count-wrap">
              <span className="cart-count">1</span>
            </span>
          </div>
          <div
            className="header-menu"
            onClick={() => this.setShowHeaderMenu()}
          >
          </div>
        </div>
        {showHeaderMenu && 
          <nav className="header-nav">
          <ul className="header-nav-items">
            {Object.values(nav).map((item, index) => (
              <li
                className="header-nav-item"
                key={item+index}
              >{item.name}</li>
            ))}
          </ul>
        </nav>}
      </section>
    );
  }
}
