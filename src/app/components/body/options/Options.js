import React from 'react';
import './options.sass';
import Light from './light/Light';

export default class Options extends React.Component {

  render() {

    const {light} = this.props;

    return (
      <div className="options">
        <ul className="options-specification">
          <li>
            <div lassName="option-name">Класс:</div>
            <div>
              <div 
                className="options-class-dropdown"
                onClick={this.props.setShowModuleWindow}>
                Standart
                
              </div>
            </div>
          </li>
          <li>
            <div className="option-name">Потребляемая мощность:</div>
            <div className="option-value">59 Вт.</div>
          </li>
          <li>
            <div className="option-name">Сила света:</div>
            <div className="option-value">3459 Люмен =7,5 ламп накаливания по 40 Вт.</div>
          </li>
          <li>
            <div className="option-name">Гарантия:</div>
            <div className="option-value">3 года</div>
          </li>
          <li>
            <div className="option-name">Монтаж:</div>
            <div className="option-value">Да</div>
          </li>
          <li>
            <div className="option-name">Итого сумма:</div>
            <div className="option-value">2594 рублей</div>
          </li>
        </ul>

        <div className="options-light">
          <div className="options-light-header">
            <button
              onClick={this.props.setShowInfo}
            >
            i
            </button>
            <div className="options-light-header-text">Выберете цвет свечения</div>
          </div>

          <ul className="options-light-change">
            {light.map((item, index) => {
              return(
                <Light 
                  item={item}
                  index={index}
                  currentlyIndexLight={this.props.currentlyIndexLight}
                  newLight={this.props.newLight} 
                  setNewLight={this.props.setNewLight} 
                  key={item+index}

                />
              )
            })}
          </ul>
        </div>
        

      </div>
    )
  }
}
