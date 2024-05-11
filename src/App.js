import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
