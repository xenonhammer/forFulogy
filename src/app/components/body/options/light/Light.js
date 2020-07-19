import React from 'react';

export default class Light extends React.Component {
  render() {
    const { item, currentlyIndexLight, index } = this.props;
    const selected = index === currentlyIndexLight;
    return (

      <li 
        className={selected
          ? "options-light-change-foto active"
          : "options-light-change-foto"
        }
        onClick={() => this.props.setNewLight(index)}
        style={{ backgroundImage: `url(${item.imgMini})` }}
        >
        {selected && 
          <span className="selected"></span>
        }
        <span className="options-light-change-title">{item.name}</span>
      </li>

    )
  }
}
