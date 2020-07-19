import React from 'react';
import './steps.sass'


export default class Steps extends React.Component {
  render() {
    const { steps } = this.props;
    return (
      <div className="steps">
        {Object.values(steps).map((step, index) => {
          let className = "step";
          if (step.show) className += " show ";
          if (step.seved) className += " seved ";
          return (
            <div
              className={className}
              key={index}
            >{step.name}
            </div>
          )
        })}
      </div>
    )
  }
}
