import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './router/Navigator';
import store from './redux/store'

const App = () =>{
  return (
   <Provider store={store}>
     <Navigation/>
   </Provider>
  );
}

export default App

