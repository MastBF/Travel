import '../assets/styles/Reviews.css';
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

function Reviews() {
 

  return (
   <div className='home'>
   
    <div className='home-flags'>
        <img src={armFlag} alt="" />
        <img src={rusFlag} alt="" />
        <img src={ukFlag} alt="" />
    </div>
    <div className='logo'>
        <img src={logo} alt="" />
    </div>
    <div className='middle-part'>
        <div className='title-part'>
        <h1>Our customers' reviews</h1>
        <div>Here’s what our happy travelers have to say about their unforgettable experiences.  </div>
        </div>
        <div className='reviews'>
            <div className='rev'>
              <img src={Reviews1} alt="" />
              <p>Our vacation in Egypt was unforgettable!The pyramids and Nile cruise were impressive.The Red Sea is perfect for diving.The local culture and hospitality made the trip special.</p>
                <div className='stars'>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                </div>
                <div className='author'>Regina Miles</div>
              </div>
              <div className='rev middle-one'>  
              <img src={Reviews2} alt="" />
              <p>Sri Lanka captivated us with its beauty! The beaches, tea plantations, and ancient temples were all amazing. Delicious food and friendly locals made the vacation memorable. </p>
                <div className='stars'>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={emptyStar} alt="" className='star'/>
                </div>
                <div className='author'>Aleksey Sokolov</div>
              </div>
              <div className='rev'>  
              <img src={Reviews3} alt="" />
              <p>
              Our vacation with friends in Bali was incredible! Beautiful beaches, stunning rice terraces, and magical sunsets. We surfed, explored temples, and had beach parties. The fresh seafood was fantastic. Perfect getaway for friends!. </p>
                <div className='stars'>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={star} alt="" className='star'/>
                <img src={emptyStar} alt="" className='star'/>
                </div>
                <div className='author'>Meri Darbinyan</div>
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
