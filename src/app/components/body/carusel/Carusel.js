import React from 'react';
import './carusel.sass';

export default class Carusel extends React.Component {


  render() {
    const { x, light, currentlyIndexLight } = this.props;


    return (
      <div className="carusel">
        <div
          className="carusel-items"
          style={{
            transform: `TranslateX(${x}px)`,
            transition: 'transform 0.25s ease'
          }}
        >
          {light.map((item, index) => {
            return (
              <div
                key={item + index}
                className="carusel-item"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >

              </div>
            )
          })}
        </div>
        <div className="switches">
          
          {light.map((elem, index)=>{
            let className = index === currentlyIndexLight 
            ? "switch active" 
            : "switch"

            return (
              <div
                onClick={ () => this.props.setNewLight(index) }
                className={className}
                key={index}
              ></div>
            )
          })}

        </div>
      </div>
    )
  }
}
//Если текухий индекс больше нового то трансформация назад на разницу умноженную на нужную трансформацию