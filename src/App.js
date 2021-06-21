import "./App.css";
import { Component } from "react";
import AppRouting from "./router/app-routing";
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux';
import rootReducer from './reducers';
import promiseMW from 'redux-promise';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
class App extends Component {
  render() {
    return (
       <Provider store={createStoreWithMW(rootReducer)}>
      <div>
        <AppRouting />
      </div>
      </Provider>
    );
  }
}

export default App;


