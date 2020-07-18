import React from 'react';
import './steps.sass'


export default class Steps extends React.Component {
  render() {
    const steps = [
      'Вариант кухни',
      'Размеры',
      'Сенсор',
      'Питающий кабель',
      'Блок питания',
      'Цвет сечения',
      'Монтаж',
      'Корзина'
    ]
    return (
      <div className="steps">
        {steps.map((step, index) => {
          return (
            <div className="step" key={index}>{step}</div>
          )
        })}
      </div>
    )
  }
}
