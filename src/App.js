import { Provider } from 'react-redux';
import './App.css';
import DogWalkerComponent from './components/DogWalkerComponent';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <DogWalkerComponent />
    </Provider>
  );
}

export default App;
