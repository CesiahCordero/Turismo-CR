import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import About  from "./pages/About";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Contacto from './pages/Contacto';
import Lug from './pages/Lug';
function App() {
  return (
    <div>
       <Routes>
        
        <Route path="/" element={<Layout />}>
           <Route path="about" element={<About />} />
           <Route path="/" element={<Home />} />
           <Route path="contacto" element={<Contacto />} />
           <Route path="lug" element={<Lug />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
