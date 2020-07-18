import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/body/Body';
import Steps from '../components/steps/Steps';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Steps />
      </>
    );
  }
}


