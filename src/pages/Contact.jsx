import React, { useEffect } from 'react';
import styles from '../assets/styles/Contact.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import flag1 from '../assets/images/Reviews/armflag.png';
import flag2 from '../assets/images/Reviews/rusflag.png';
import flag3 from '../assets/images/Reviews/ukflag.png';
import logo from '../assets/images/logo.png';
import '../assets/styles/Contact.module.css'
const ContactUs = () => {
  useEffect(() => {
    const menubtn = document.getElementById('menubtn');
    const closemenubtn = document.getElementById('closemenubtn');
    const menu = document.getElementById('menu');

    const toggleMenu = () => {
      menu.classList.toggle(styles.open);
      menubtn.classList.toggle(styles.open);
    };

    menubtn.addEventListener('click', toggleMenu);
    closemenubtn.addEventListener('click', toggleMenu);

    return () => {
      menubtn.removeEventListener('click', toggleMenu);
      closemenubtn.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <div className='contact'>
      <div className={styles.languageSelect}>
        <img src={flag1} alt="Flag 1" />
        <img src={flag2} alt="Flag 2" />
        <img src={flag3} alt="Flag 3" />
      </div>
      <nav>
        <div className={styles.menuIcon}>
          <i className={`fa-solid fa-bars ${styles.menubtn}`} id="menubtn"></i>
        </div>
        <div className={styles.navbar}>
          <ul className={styles.menu} id="menu">
            <i className="fa-solid fa-xmark" id="closemenubtn"></i>
            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#"><i className="fas fa-info-circle"></i> About us</a></li>
            <li><a href="#"><i className="fas fa-concierge-bell"></i> Services</a></li>
            <li><a href="#"><i className="fas fa-star"></i> Reviews</a></li>
            <li><a href="#"><i className="fas fa-envelope"></i> Contact us</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <section className={styles.contactus}>
          <div className="logo">
            <img src={logo} alt="Moni Travel Logo" className="logoPhoto" width="300px" height="250px" style={{ marginTop: '-30px' }} />
          </div>
          <div className={styles.headerbox}>
            <h2>Contact Us</h2>
            <p>Get in touch with us for more information or to book your next adventure</p>
          </div>
          <form action="" className={styles.contactform} method="">
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Your name" />
            <textarea id="textarea" placeholder="Your massage"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <div className={styles.footerbox}>
          <div className={styles.contactdata}>
            <h3><i className="fa-solid fa-location-dot"></i>Gai avenue 8, Yerevan, Armenia 0056</h3>
            <a href="tel:+37493668893"><div><span><i className="fa-solid fa-phone"></i> +374 93 66-88-93</span></div></a>
            <a href="mailto: shushanik.uzunyan@gmail.com"><div><span><i className="fa-solid fa-envelope"></i> shushanik.uzunyan@gmail.com</span></div></a>
          </div>
          <div className={styles.workinghours}>
            <span>Working Hours :</span>
            <span>Mon-Fri - 10:00-19:00</span>
            <span>Sat - 11:00-17:00</span>
          </div>
          <div className={styles.socialmedia}>
            <div className={styles.mediaicons}>
              <span><a href="">Facebook <i className="fa-brands fa-facebook"></i></a></span>
              <span><a href="" className={styles.spyurlink}>Spyur <i className={styles.iconspyur} style={{ marginLeft: '-10px' }}></i></a></span>
              <span><a href="">Instagram <i className="fa-brands fa-instagram"></i></a></span>
            </div>
            <div className={styles.quicklinks}>
              <a href="">About Us</a>
              <a href="">Services</a>
              <a href="">Reviews</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
