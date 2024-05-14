import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Buycredits from './components/Buycredits';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/buycredits' element={<Buycredits/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
