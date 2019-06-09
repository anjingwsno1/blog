import React, { Component } from 'react';
import Header from './common/header';
import { ResetGlobalStyled } from './style.js';
import { GlobalIconStyled } from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <div>
        <ResetGlobalStyled />
        <GlobalIconStyled />
        <Header />
      </div>
    )
  }
}

export default App;
