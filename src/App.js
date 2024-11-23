
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes} from 'react-router-dom'
import Reviews from './pages/Review';
import SignUpLogin from './pages/Login';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import Custom from './pages/Custom';

function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/about" element={<About/> }/>
          <Route path="/review" element={<Reviews/> }/>
          <Route path="/login" element={<SignUpLogin/> }/>
          <Route path="/signup" element={<SignUp/> }/>
          <Route path="/menu" element={<Menu/> }/>
          <Route path="/custom" element={<Custom/> }/>
          

        </Routes>
      </div>
      <Footer/>
      
    
    </div>
  );
}

export default App;
