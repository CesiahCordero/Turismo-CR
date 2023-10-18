import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () =>{
 return <div>   
    <nav>
       <ul>
          <button> <Link to="/"><a>Inicio</a></Link></button>
          
            <button><Link to="/about"><a>Nosotros</a></Link></button>
          
          
            <button> <Link to="/lug"><a>Lugares</a></Link> </button>
          
          
            <button><Link to="/contacto"><a>Contacto</a></Link> </button>
          
          
            
         
        </ul>
    </nav>
    <hr />
    
    <Outlet />
 </div>;
}

export default Layout;