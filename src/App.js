import Temp1 from './Temp1';
import Temp2 from './Temp2';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Temp1/>
          <Temp2/>
      </Provider>
    </div>
  );
}

export default App;
