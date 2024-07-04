import '../assets/styles/Services.css';
import PolygonRight from '../assets/images/Reviews/Polygon3.png';
import PolygonLeft from '../assets/images/Reviews/Polygon4.png';
import Reactangle from '../assets/images/Reviews/Rectangle.png';
import armFlag from '../assets/images/Reviews/armflag.png';
import rusFlag from '../assets/images/Reviews/rusflag.png';
import ukFlag from '../assets/images/Reviews/ukflag.png';
import logo from '../assets/images/logo.png';
import Reviews1 from '../assets/images/Reviews/Reviews1.png';
import Reviews2 from '../assets/images/Reviews/Reviews2.png';
import Reviews3 from '../assets/images/Reviews/Reviews3.png';
import star from '../assets/images/Reviews/star.png';
import emptyStar from '../assets/images/Reviews/emptyStar.png';
import img1 from  '../assets/images/Services/img1.png'
import img2 from  '../assets/images/Services/img2.png'
import img3 from  '../assets/images/Services/img3.png'
import img4 from  '../assets/images/Services/img4.png'


function Reviews() {
 

  return (
   <div className='home services'>
   
    <div className='home-flags'>
        <img src={armFlag} alt="" />
        <img src={rusFlag} alt="" />
        <img src={ukFlag} alt="" />
    </div>
    <div className='logo'>
        <img src={logo} alt="" />
    </div>
    <div className='middle-part-services'>
    <div className='ser-title-part'>
        <h1>Services</h1>
        <p>We provide a full range of travel services for a comfortable and unforgettable trip.</p>
    </div>
    <div className='country'>
        <div className='offer'>
            <img src={img1} alt="" />
            <h3 >Greece </h3>
            <h2>Santorini</h2>
            <p className='p'>Discover ancient ruins and temples.
            7D-6N         |        Pax : 10  </p>
            <p className='price'><b>$1050</b>/per person</p>
        </div>
        <div className='offer'>
            <img src={img1} alt="" />
            <h3>Greece </h3>
            <h2>Santorini</h2>
            <p className='p'> Discover ancient ruins and temples.
            7D-6N         |        Pax : 10  </p>
            <p className='price'><b>$1050</b>/per person</p>
        </div>
        <div className='offer'>
            <img src={img1} alt="" />
            <h3>Greece </h3>
            <h2>Santorini</h2>
            <p className='p'>Discover ancient ruins and temples.
            7D-6N         |        Pax : 10  </p>
            <p className='price'><b>$1050</b>/per person</p>
        </div>
    </div>
    </div>
    <img src={PolygonRight} alt="" className='polygon-right'/>
    <img src={PolygonLeft} alt="" className='polygon-left'/>
    <img src={Reactangle} alt="" className='reactangle'/>
   </div>
  );
}

export default Reviews;
