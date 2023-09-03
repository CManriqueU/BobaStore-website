import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Story from './components/Story/Story'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'


function App() {
  return (
  <>
    <Header tex="Hellow World" />
    <Story />
    <Gallery />
    <Footer/>
    <div className='container'>
    </div>
  </>
  );
}

export default App;
