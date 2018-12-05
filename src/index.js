import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";
import TodoList from './components/TodoList.js'

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}> 
    <TodoList/>
  </Provider>,
  document.getElementById("root")
  );