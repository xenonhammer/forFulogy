import React from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Steps from './components/steps/Steps';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      steps: {
        kitchen: {
          name: 'Вариант кухни',
          show: false,
          seved: true
        },
        proportion: {
          name: 'Размеры',
          show: false,
          seved: true
        },
        sensor: {
          name: 'Сенсор',
          show: false,
          seved: true
        },
        powerCable: {
          name: 'Питающий кабель',
          show: false,
          seved: true
        },
        powerSupply: {
          name: 'Блок питания',
          show: false,
          seved: true
        },
        glowColor: {
          name: 'Цвет сечения',
          show: true,
          seved: true
        },
        mounting: {
          name: 'Монтаж',
          show: false,
          seved: false
        },
        cart: {
          name: 'Корзина',
          show: false,
          seved: false
        }
      },
    }
  }
  render() {
    return (
      <>
        <Header />
        <Body steps={this.state.steps}/>
        <Steps steps={this.state.steps}/>
      </>
    );
  }
}


