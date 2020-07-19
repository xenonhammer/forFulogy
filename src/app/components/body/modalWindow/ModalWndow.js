import React from 'react';
import './modalWindow.sass';

export default class ModalWndow extends React.Component {
  render() {
    return (
      <div className="modal-wrap">
        <div className="modal-window">
          Вы действительно хотите сменить класс светильника?
          <div className="modal-button-wrap">
            <button
              className="btn btn-true"
              onClick={this.props.setShowModuleWindow}
            >Да
            </button>
            <button
              className="btn btn-false"
              onClick={this.props.setShowModuleWindow}
            >Нет
            </button>
          </div>
        </div>
      </div>
    )
  }
}
