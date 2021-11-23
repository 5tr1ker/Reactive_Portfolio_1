import './App.css';
import './design.css';
import Base from './component/Bac';
import React , { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './component/modules/indexs';
// 11.15일부터 시작
function App() {
  const store = createStore(rootReducer);
  return (
    <Fragment>
      <Provider store={store}>
      <Base/>
      </Provider>
    </Fragment>
  );
}

export default App;
