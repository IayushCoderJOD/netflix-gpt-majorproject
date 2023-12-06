// import Header from './Header';
import Body from './Body';
import './App.css';
// import appStore from './appStore';
import appStore from './Utils/AppStore'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={appStore} >
      <Body />
    </Provider>
  );
}

export default App; 
