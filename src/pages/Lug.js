import footer from './footer.png';

import museo_one from './museo_one.jpg';
import museo_dos from './museo_dos.png';
import museo_tres from './museo_tres.jpg';
import museo_cuatro from './museo_cuatro.webp';

import tn_one from './tn_one.jpg';
import tn_dos from './tn_dos.jpg';
import tn_tres from './tn_tres.jpg';
import tn_cuatro from './tn_cuatro.jpg';

import mo_one from './mo_one.webp';
import mo_dos from './mo_dos.jpg';
import mo_tres from './mo_tres.jpg';
import mo_cuatro from './mo_cuatro.jpg';

import rc_one from './rc_one.png';
import rc_dos from './rc_dos.webp';
import rc_tres from './rc_tres.avif';
import rc_cuatro from './rc_cuatro.webp';

import cv_one from './cv_one.jpg';
import cv_dos from './cv_dos.jpg';
import cv_tres from './cv_tres.jpg';
import cv_cuatro from './cv_cuatro.webp';

import lh_one from './lh_one.jpg';
import lh_dos from './lh_dos.jpg';
import lh_tres from './lh_tres.jpg';
import lg_cuatro from './lg_cuatro.jpg';

import pru_one from './pru_one.jpg';
import pru_dos from './pru_dos.jpg';
import pru_tres from './pru_tres.jpg';
import pru_cuatro from './pru_cuatro.jpg';

import ba_one from './ba_one.jpg';
import ba_dos from './ba_dos.webp';
import ba_tres from './ba_tres.jpg';
import ba_cuatro from './ba_cuatro.jpg';

import san_one from './san_one.jpg';
import san_dos from './san_dos.jpg';
import san_tres from './san_tres.jpg';
import san_cuatro from './san_cuatro.jpg';

import dav_one from './dav_one.webp';
import dav_dos from './dav_dos.jpg';
import dav_tres from './dav_tres.jpg';
import dav_cuatro from './dav_cuatro.jpg';

import ti_one from './ti_one.jpg';
import ti_dos from './ti_dos.jpg';
import ti_tres from './ti_tres.jpg';
import ti_cuatro from './ti_cuatro.jpg';

import hj_one from './hj_one.jpg';
import hj_dos from './hj_dos.jpg';
import hj_tres from './hj_tres.jpg';
import hj_cuatro from './hj_cuatro.jpg';

import sam_one from './sam_one.jpg';
import sam_dos from './sam_dos.jpg';
import sam_tres from './sam_tres.jpg';
import sam_cuatro from './sam_cuatro.jpg';

import con_one from './con_one.jpg';
import con_dos from './con_dos.jpg';
import con_tres from './con_tres.jpg';
import con_cuatro from './con_cuatro.jpg';

import ara_one from './ara_one.webp';
import ara_dos from './ara_dos.jpg';
import ara_tres from './ara_tres.jpg';
import ara_cuatro from './ara_cuatro.jpg';

import tor_one from './tor_one.jpg';
import tor_dos from './tor_dos.jpg';
import tor_tres from './tor_tres.jpg';
import tor_cuatro from './tor_cuatro.jpg';

import mar_one from './mar_one.jpg';
import mar_dos from './mar_dos.jpg';
import mar_tres from './mar_tres.jpg';
import mar_cuatro from './mar_cuatro.jpg';

import cor_one from './cor_one.jpg';
import cor_dos from './cor_dos.jpg';
import coru_tres from './coru_tres.jpg';
import cor_cuatro from './cor_cuatro.jpg';

import cah_one from './cah_one.jpg';
import cah_dos from './cah_dos.jpg';
import cah_tres from './cah_tres.jpg';
import cah_cuatro from './cah_cuatro.jpg';

import uva_one from './uva_one.jpg';
import uva_dos from './uva_dos.jpg';
import uva_tres from './uva_tres.jpg';
import uva_cuatro from './uva_cuatro.jpg';

import manz_one from './manz_one.jpg';
import manz_dos from './manz_dos.jpg';
import manz_tres from './manz_tres.jpg';
import manz_cuatro from './manz_cuatro.jpg';


import {Link} from "react-router-dom";
import React from 'react'
import './Lug.css';
const Lug = () => {
  return (
    <div>
    <p1> Lugares para visitar: San José</p1>
    <h1>Museo de los niños</h1>
    <img src={museo_one} alt="Museo" className="niños"/>
  
    <table>
        
        <tbody>
          <tr>
          <td>
            <img src={museo_dos} alt="museo_dos" className="mus"/>
            </td>
            <td>
            <img src={museo_tres} alt="museo_tres" className="mus"/>
            </td>
           <td>
           <img src={museo_cuatro} alt="museo_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/F1vvzWBSRWwoSCww9" title="Ingresa"><p>Ingresa aquí</p></Link></th>
          <td>Fácil</td>
          <td>Accesible</td>
          <td>Sí</td>
          <td>No</td>
          <td>No</td>
          <td>₡2.500</td>
        </tr>
      </table>

      <h1>Teatro Nacional de CR</h1>
    <img src={tn_one} alt="tn_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={tn_dos} alt="tn_dos" className="mus"/>
            </td>
            <td>
            <img src={tn_tres} alt="tn_tres" className="mus"/>
            </td>
           <td>
           <img src={tn_cuatro} alt="tn_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>

      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/9bxry7vjPeJtkAUv5" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Sí</td>
          <td>No</td>
          <td>No</td>
          <td>₡4.000</td>
        </tr>
      </table>


      <h1>Museo de oro CR</h1>
    <img src={mo_one} alt="mo_one" className="museOro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={mo_dos} alt="mo_dos" className="mus"/>
            </td>
            <td>
            <img src={mo_tres} alt="mo_tres" className="mus"/>
            </td>
           <td>
           <img src={mo_cuatro} alt="mo_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>

      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/pC9JbqFKUnTCN7zR7" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>No</td>
          <td>No</td>
          <td>₡3.500</td>
        </tr>
      </table>


      <p1> Lugares para visitar: Alajuela</p1>


      <h1>Rescue Center CR</h1>
    <img src={rc_one} alt="rc_one" className="RC"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={rc_dos} alt="rc_dos" className="mus"/>
            </td>
            <td>
            <img src={rc_tres} alt="rc_tres" className="mus"/>
            </td>
           <td>
           <img src={rc_cuatro} alt="rc_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/geNACnu5SjzrwE9v6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>No</td>
          <td>No</td>
          <td>$23</td>
        </tr>
      </table>


      <h1>Cavernas de venado</h1>
    <img src={cv_one} alt="cv_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={cv_dos} alt="cv_dos" className="mus"/>
            </td>
            <td>
            <img src={cv_tres} alt="cv_tres" className="mus"/>
            </td>
           <td>
           <img src={cv_cuatro} alt="cv_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/3pqazuJP4RUvTyfj6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Media</td>
          <td>No Accesible</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
          <td>₡12.000</td>
        </tr>
      </table>



      <h1>Laguna de Hule</h1>
    <img src={lh_one} alt="lh_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={lh_dos} alt="lh_dos" className="mus"/>
            </td>
            <td>
            <img src={lh_tres} alt="lh_tres" className="mus"/>
            </td>
           <td>
           <img src={lg_cuatro} alt="lg_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>

      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/9Tg1FM18z9hwcJGbA" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Media</td>
          <td>No accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>Sí</td>
          <td>₡2.000</td>
        </tr>
      </table>


      <p1> Lugares para visitar: Cartago</p1>

      <h1>Prusia</h1>
    <img src={pru_one} alt="pru_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={pru_dos} alt="pru_dos" className="mus"/>
            </td>
            <td>
            <img src={pru_tres} alt="pru_tres" className="mus"/>
            </td>
           <td>
           <img src={pru_cuatro} alt="pru_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>

      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/wCGsfHWLnVpok3Ub6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Media</td>
          <td>No accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>₡1.000</td>
        </tr>
      </table>


      <h1>Basilica de Nuestra Señora los Ángeles</h1>
    <img src={ba_one} alt="ba_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={ba_dos} alt="ba_dos" className="mus"/>
            </td>
            <td>
            <img src={ba_tres} alt="ba_tres" className="mus"/>
            </td>
           <td>
           <img src={ba_cuatro} alt="ba_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/koxkUWAAUowfRcaB6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
          <td>Gratis</td>
        </tr>
      </table>


      <h1>Sanatorio Dr. Carlos Durán Cartín</h1>
    <img src={san_one} alt="san_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={san_dos} alt="san_dos" className="mus"/>
            </td>
            <td>
            <img src={san_tres} alt="san_tres" className="mus"/>
            </td>
           <td>
           <img src={san_cuatro} alt="san_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/Q4ssdMyWkpDGaQBUA" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>₡2.000</td>
        </tr>
      </table>

      <p1> Lugares para visitar: Heredia</p1>


      <h1>Dave & Dave's Costa Rica Nature Park</h1>
    <img src={dav_one} alt="dav_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={dav_dos} alt="dav_dos" className="mus"/>
            </td>
            <td>
            <img src={dav_tres} alt="dav_tres" className="mus"/>
            </td>
           <td>
           <img src={dav_cuatro} alt="dav_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/btfMEwBs9oSxCx5A7" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>No</td>
          <td>No</td>
          <td>$20</td>
        </tr>
      </table>





      <h1>Tirimbina Biological Reserve</h1>
    <img src={ti_one} alt="ti_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={ti_dos} alt="ti_dos" className="mus"/>
            </td>
            <td>
            <img src={ti_tres} alt="ti_tres" className="mus"/>
            </td>
           <td>
           <img src={ti_cuatro} alt="ti_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/8ssgQiL7XQZ4HeeX6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Media</td>
          <td>No accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>$18</td>
        </tr>
      </table>



      <h1>Bosque la Hoja</h1>
    <img src={hj_one} alt="hj_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={hj_dos} alt="hj_dos" className="mus"/>
            </td>
            <td>
            <img src={hj_tres} alt="hj_tres" className="mus"/>
            </td>
           <td>
           <img src={hj_cuatro} alt="hj_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/pM2X7zZjRaaWNcSR7" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>₡800</td>
        </tr>
      </table>


      <p1> Lugares para visitar: Guanacaste</p1>

      <h1>Playa Samara</h1>
    <img src={sam_one} alt="sam_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={sam_dos} alt="sam_dos" className="mus"/>
            </td>
            <td>
            <img src={sam_tres} alt="sam_tres" className="mus"/>
            </td>
           <td>
           <img src={sam_cuatro} alt="sam_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/z2rie6aQQVbjYvVt6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>Gratis</td>
        </tr>
      </table>



      <h1>Playa Conchal</h1>
    <img src={con_one} alt="con_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={con_dos} alt="con_dos" className="mus"/>
            </td>
            <td>
            <img src={con_tres} alt="con_tres" className="mus"/>
            </td>
           <td>
           <img src={con_cuatro} alt="con_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/mZT8zGh7qMtSNNjB9" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>Gratis</td>
        </tr>
      </table>



      <h1>Cañón Aranjuez</h1>
    <img src={ara_one} alt="ara_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={ara_dos} alt="ara_dos" className="mus"/>
            </td>
            <td>
            <img src={ara_tres} alt="ara_tres" className="mus"/>
            </td>
           <td>
           <img src={ara_cuatro} alt="ara_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/uwSDYJAZoKLhNYP76" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Media</td>
          <td>No accesible</td>
          <td>Sí</td>
          <td>No</td>
          <td>No</td>
          <td>₡11.000</td>
        </tr>
      </table>

      <p1> Lugares para visitar: Puntarenas</p1>

      <h1>Isla Tortuga</h1>
    <img src={tor_one} alt="tor_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={tor_dos} alt="tor_dos" className="mus"/>
            </td>
            <td>
            <img src={tor_tres} alt="tor_tres" className="mus"/>
            </td>
           <td>
           <img src={tor_cuatro} alt="tor_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to=":https://maps.app.goo.gl/7jVvzmwteTQerhNV9" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Media</td>
          <td>No accesible</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
          <td>Depende (Lancha)</td>|
        </tr>
      </table>



      <h1>Parque marino del Pácifico</h1>
    <img src={mar_one} alt="mar_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={mar_dos} alt="mar_dos" className="mus"/>
            </td>
            <td>
            <img src={mar_tres} alt="mar_tres" className="mus"/>
            </td>
           <td>
           <img src={mar_cuatro} alt="mar_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/QgR46KN1vMLNMzax6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>No</td>
          <td>No</td>
          <td>₡2.900</td>
        </tr>
      </table>



      <h1>Refugio Nacional Curú</h1>
    <img src={cor_one} alt="cor_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={cor_dos} alt="cor_dos" className="mus"/>
            </td>
            <td>
            <img src={coru_tres} alt="coru_tres" className="mus"/>
            </td>
           <td>
           <img src={cor_cuatro} alt="cor_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/F1vvzWBSRWwoSCww9" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>sí</td>
          <td>No</td>
          <td>Gratis</td>
        </tr>
      </table>

      <p1> Lugares para visitar: Limón</p1>

      <h1>Playa Cahuita</h1>
    <img src={cah_one} alt="cah_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={cah_dos} alt="cah_dos" className="mus"/>
            </td>
            <td>
            <img src={cah_tres} alt="cah_tres" className="mus"/>
            </td>
           <td>
           <img src={cah_cuatro} alt="cah_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/cSqjjDUV2eJoEsM89" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>Gratis</td>
        </tr>
      </table>



      <h1>Playa Punto Uva</h1>
    <img src={uva_one} alt="uva_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={uva_dos} alt="uva_dos" className="mus"/>
            </td>
            <td>
            <img src={uva_tres} alt="uva_tres" className="mus"/>
            </td>
           <td>
           <img src={uva_cuatro} alt="uva_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>


      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/9LGNEGVcfgKnPdVAA" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>Gratis</td>
        </tr>
      </table>



      <h1>Ara Manzanillo</h1>
    <img src={manz_one} alt="manz_one" className="teatro"/>
      <table>
        
        <tbody>
          <tr>
          <td>
            <img src={manz_dos} alt="manz_dos" className="mus"/>
            </td>
            <td>
            <img src={manz_tres} alt="manz_tres" className="mus"/>
            </td>
           <td>
           <img src={manz_cuatro} alt="manz_cuatro" className="mus"/> 
            </td>
          </tr>
          
        </tbody>
      </table>

      <table className="table-simple" style={{ borderSpacing: "10px" }}>
        <tr>
          <th><o>¿Cómo llegar?</o></th>
          <th><o>Dificultad</o></th>
          <th><o>Accesibilidad</o></th>
          <th><o>Parqueo</o></th>
          <th><o>Mascotas</o></th>
          <th><o>Camping</o></th>
          <th><o>Costo</o></th>
        </tr>
        <tr>
        <th><Link to="https://maps.app.goo.gl/ZbydyjWN9vozgnMQ6" title="Ingresa"><p>Ingresa aqui</p></Link></th>
          <td>Facil</td>
          <td>Accesible</td>
          <td>Si</td>
          <td>Sí</td>
          <td>No</td>
          <td>$20</td>
        </tr>
      </table>

      <img src={footer} alt="footer" className="pie"/>
    </div>
  )
}

export default Lug