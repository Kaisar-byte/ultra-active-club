import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
