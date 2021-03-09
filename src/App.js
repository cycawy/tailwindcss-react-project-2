import logo from './logo.svg';
import './App.css';
import ImgOne from './img/img-1.jpeg';
import ImgTwo from './img/img-2.jpeg';

function App() {
  return (
    <div className="App">
      <h1>My new APP</h1>
      <p>this is a test for re-deployment</p>
      <div className='flex flex-column bg-black text-white'>
        <p className='bg-black text-white'>dilicious food</p>
        <img src={ImgOne} />
      </div>
      
      <p>this is a test for re-deployment</p>
      <div>
        <img src={ImgTwo} />
      </div>
      
    </div>
  );
}

export default App;
