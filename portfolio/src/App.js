import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <div className="App">
          <Header>
              <Nav />
          </Header>

          <Routes>
            <Route path='/' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/projects' element={<Work />}/>
            <Route path='/resume' element={<Resume />}/>
                
          </Routes>

          <Footer/>
      </div>
    </Router>
  );
}

export default App;
