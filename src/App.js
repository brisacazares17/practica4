
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Barra from './layout/Barra';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Routes>

    <Route path='/' element={<Barra/>}>

      <Route path='about' element={ <About/> }  />
      <Route path='contacto' element={ <Contact/> }  />
      <Route index element={ <Home/> }  />
    </Route>

    </Routes>
    </BrowserRouter>
  );
}
export default App;
