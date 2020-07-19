import React from 'react';
import './body.sass';
import Carusel from './carusel/Carusel';
import Options from './options/Options';
import fotoLight from '../../../img/foloLight.webp';
import fotoLightMini from '../../../img/fotoLightMini.webp';
import ModalWndow from './modalWindow/ModalWndow';

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModuleWindow: false,
      currentlyIndexLight: null,
      x: 560,
      showInfo: false,
      light: [
        {
          name: 'Теплый',
          img: fotoLight,
          imgMini: fotoLightMini
        },
        {
          name: 'Дневной',
          img: fotoLight,
          imgMini: fotoLightMini
        },
        {
          name: 'Холодный',
          img: fotoLight,
          imgMini: fotoLightMini
        }
      ]
    };

    this.setNewLight = this.setNewLight.bind(this);
  }

  setShowModuleWindow = () => {
    this.setState({ showModuleWindow: !this.state.showModuleWindow })
  }

  setNewLight(item) {
    this.setState((prevState) => {
      let transformX = prevState.currentlyIndexLight - item;

      return {
        x: this.state.x + (transformX * 561),
        currentlyIndexLight: item
      };
    });

  }

  setShowInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { showInfo, showModuleWindow } = this.state;
    const { steps } = this.props;

    if (showInfo) {
      return (
        <section className="body-info">
          <div className="close-info" onClick={this.setShowInfo}>
            <span className="close-info-icon"></span>
            <span>Вернуться</span>
          </div>
          <div className="body-info-text">
            <p>
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem
              Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а
              также реальное распределение букв и пробелов в абзацах, которое не получается при простой
              дубликации.
            </p>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
              образцов.
            </p>
            <p>
              Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем
              так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух
              тысячелетий назад.
            </p>
          </div>
        </section>
      )
    } else if (steps.kitchen.show) {
      return (
        <section className="kitchen"></section>
      )
    } else if (steps.proportion.show) {
      return (
        <section className="proportion"></section>
      )
    } else if (steps.sensor.show) {
      return (
        <section className="sensor"></section>
      )
    } else if (steps.powerCable.show) {
      return (
        <section className="power-cable"></section>
      )
    } else if (steps.powerSupply.show) {
      return (
        <section className="power-supply"></section>
      )
    } else if (steps.glowColor.show) {
      return (
        <section className="glow-color body-wrap">
          {showModuleWindow &&
            <ModalWndow
              setShowModuleWindow={this.setShowModuleWindow}
            />}
          <Carusel
            setNewLight={this.setNewLight}
            currentlyIndexLight={this.state.currentlyIndexLight}
            newLight={this.state.newLight}
            light={this.state.light}
            x={this.state.x}
          />
          <Options
            setShowModuleWindow={this.setShowModuleWindow}
            currentlyIndexLight={this.state.currentlyIndexLight}
            newLight={this.state.newLight}
            setNewLight={this.setNewLight}
            setShowInfo={this.setShowInfo}
            light={this.state.light}
          />
        </section>
      )
    } else if (steps.mounting.show) {
      return (
        <section className="mounting"></section>
      )

    } else if (steps.cart.show) {
      return (
        <section className="cart"></section>
      )
    }
  }
}
