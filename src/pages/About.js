import marco from './marco.png';
import selva from './selva.png';
import playa from './playa.png';
import cultura from './cultura.png';
import tradicion from './tradicion.png';
import footer from './footer.png';
import img from './img.png';
import './About.css';

const About = () => {
  return (
    <div>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={marco} alt="Marco" className="marco"/>
            </td>
            <td><p1>
            ¡Bienvenidos a nuestra página turística de Costa Rica!
            </p1>
            <p2>
            <br /> Somos un equipo apasionado por el hermoso país de Centroamérica y queremos compartir nuestra pasión contigo. 
            </p2>
            <p2>Nos encanta explorar los tesoros escondidos de este paraíso tropical y mostrarle al mundo todo lo que Costa Rica tiene para ofrecer.
            </p2></td>
           
          </tr>
        </tbody>
      </table>


          <table>
        
        <tbody>
          <tr>
          <td>
            <img src={selva} alt="selva" className="visi"/>
            </td>
            <td>
            <img src={playa} alt="playa" className="visi"/>
            </td>
           <td>
           <img src={cultura} alt="cultura" className="visi"/> 
            </td>
            <td>
           <img src={tradicion} alt="tradicion" className="visi"/> 
            </td>
          </tr>
        </tbody>
      </table>
      <p1>
      Nuestro objetivo:<br />
        </p1>

        <a1>
        Es ser tu guía confiable mientras descubres las maravillas de Costa Rica. <br />Ya sea que estés buscando aventuras emocionantes en la selva, relajarte en playas de aguas cristalinas o sumergirte en la rica cultura y tradiciones del país, estamos aquí para ayudarte a planificar tu viaje perfecto.

</a1>
<table>
        
        <tbody>
          <tr>
          <td>
          <img src={img} alt="img" className="ul"/> 
            </td>
            <td>
            <a1>Con años de experiencia en la industria del turismo, conocemos los mejores destinos, actividades y alojamientos que Costa Rica tiene para ofrecer. Nuestro equipo de expertos está comprometido en brindarte recomendaciones personalizadas y consejos prácticos para que puedas aprovechar al máximo tu tiempo en este increíble destino.

Además, nos enorgullece promover el turismo sostenible en Costa Rica. <br /> <br /> Creemos en la preservación del medio ambiente y el apoyo a las comunidades locales. Trabajamos en estrecha colaboración con operadores turísticos responsables que comparten nuestros valores y promueven prácticas sostenibles.

Estamos emocionados de acompañarte en esta aventura y ayudarte a crear recuerdos inolvidables en Costa Rica. Explora nuestro sitio web, descubre las maravillas de este país y déjate inspirar para tu próximo viaje.
</a1>
            </td>
           
          </tr>
        </tbody>
      </table>

      <img src={footer} alt="footer" className="pie"/>
   
    </div>

  );
};

export default About;

