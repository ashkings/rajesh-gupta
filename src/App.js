import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import Header from './components/Header/header';

function App() {
  return (
    <div className='w-fit'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
