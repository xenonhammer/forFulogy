import React from 'react';
import './options.sass';
import Light from './light/Light';

export default class Options extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      itemLight: ""
    }
  
    this.setItemLight = this.setItemLight.bind(this);
  }

  setItemLight(item){
    this.setState({ itemLight: item })
  }

  render() {
    const light = [
      'Теплый',
      'Дневной',
      'Холодный'
    ];
    return (
      <div className="options">
        <ul className="options-specification">
          <li>
            <div>Класс:</div>
            <div>
              <select className="options-class-dropdown">
                <option selected value="t1">Standart</option>
                <option value="t2">Standart</option>
                <option value="t3">Standart</option>
                <option value="t4">Standart</option>
              </select>
            </div>
          </li>
          <li>
            <div>Потребляемая мощность:</div>
            <div>59 Вт.</div>
          </li>
          <li>
            <div>Сила света:</div>
            <div>3459 Люмен =7,5 ламп накаливания по 40 Вт.</div>
          </li>
          <li>
            <div>Гарантия:</div>
            <div>3 года</div>
          </li>
          <li>
            <div>Монтаж:</div>
            <div>Да</div>
          </li>
          <li>
            <div>Итого сумма:</div>
            <div>2594 рублей</div>
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
                  title={item} 
                  itemLight={this.state.itemLight} 
                  setItemLight={this.setItemLight} 
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
