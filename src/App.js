import './App.css';
import HomePage from './customer/Pages/HomePage';
import Footer from './customer/component/footer/Footer';
import Navbar from './customer/component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <HomePage/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
