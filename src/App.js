import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import  store  from './stores/index'
import ContainedButtons from './components/counter'


function App() {
  return (
    <Provider store={ store }>
      <ContainedButtons />
    </Provider>
  );
}

export default App;
