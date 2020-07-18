import React from 'react';

export default class Light extends React.Component {
  render() {
    const title = this.props.title;
    const selected = title === this.props.itemLight;
    return (

      <li 
        className={selected
          ? "options-light-change-foto active"
          : "options-light-change-foto"
        }
        onClick={() => this.props.setItemLight(title)}
        >
        {selected && 
        <span className="selected"></span>}
        <span className="options-light-change-title">{title}</span>
      </li>

    )
  }
}
