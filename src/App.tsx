import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import { Button } from 'antd';

import store from './store';

function App() {
    return (
      <div className="App">
          <span>{store.age}</span>
          <Button type="primary" onClick={() => store.increase()}>a</Button>
      </div>
    );
}

export default observer(App);
