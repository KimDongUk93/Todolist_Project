import React from 'react';
import InputComp from "./components/InputComp";
import ListComp from "./components/ListComp";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todolist</h1>
        <InputComp/>
        <ListComp/>
      </div>
    </Provider>
  );
}

export default App;
