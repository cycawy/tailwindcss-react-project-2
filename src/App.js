import logo from './logo.svg';
import './App.css';
import ImgOne from './img/img-1.jpeg';

function App() {
  return (
    <div className="App">
      <h1>My new APP</h1>
      <p>this is a test for re-deployment</p>
      <img src={ImgOne} />
    </div>
  );
}

export default App;
