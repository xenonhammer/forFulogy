import React from 'react';
import './header.sass'

export default class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <div className="header-logo">fulogy</div>
        <div className="header-right-wrap">
          <div className="header-cart">
              <span className="cart-count-wrap">
              <span className="cart-count">2</span>
            </span>
          </div>
          <nav className="header-menu"></nav>
        </div>
      </section>
    )
  }
}
