import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Support from './screens/Support';
import Contact from './screens/Contact';
import Employee from './screens/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './screens/Header';

function App() {
  return (
    <div className="App">
      <h2 className='text-info'>Welcome CS</h2>
      <BrowserRouter basename="/firstreactapp_1">    
      <Header />
           <Routes>            
                  <Route path='home' element={<Home />}/>
                  <Route path='about' element={<About />}/>
                  <Route path='support' element={<Support />}/>
                  <Route path='contact' element={<Contact />}/>
                  <Route path='employee' element={<Employee />}/>                 
                  <Route path='' element={<Home />}/>
           </Routes>
        </BrowserRouter>

     {/* <Home/>
     <About/>
     <Support/>
     <Contact/>
     <Employee/>     */}
    </div>
   
  );
}

export default App;
