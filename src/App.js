import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { ResetGlobalStyled } from './style.js';
import { GlobalIconStyled } from './statics/iconfont/iconfont.js';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ResetGlobalStyled />
        <GlobalIconStyled />
        <Header />
      </Provider>
    )
  }
}

export default App;
