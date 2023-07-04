import React, { useState } from "react";
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import instaGram from "./../../assets/in.png";
import linkedIn from "./../../assets/li.png";
import Footer from "./../Footer/Footer.jsx";
import Header from "./../Header/Header.jsx";
import "./Contact.css";
function Contact() {

    const [formData, setFormData] = useState({
      // name: "",
      email: "",
      subject:"",
      message: "",
      phone: 0,
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSend = () => {
      const destination = "nicoarisaputra@gmail.com";
      // const message = `Halo, saya ingin mengirim pesan kepada anda! Nama: ${formData.name}, Email: ${formData.email}, Pesan: ${formData.message}`;
      // const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `mailto:${destination}?subject=${formData.subject}&body= Hallo saya dari ${formData.email} , saya ingin ${formData.message}, bisakah anda menghubungi saya di ${formData.phone}`;
      window.location.href = whatsappURL;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSend();
    };

    console.log(handleSubmit,"isi send")
  return (
    <div className='section-container'>
      <Header
        heading="Get in touch."
        subHeading="Interested to collaborate? Feel free to drop me an email.">
      </Header>
      <div className='contact-form-container'>
        <form className='contact-form' onSubmit={handleSubmit}
        id='contact-form'>
          <input type="email" className='input-box email-input'
            placeholder='Your Email Id' name='email' required
            onChange={handleChange}
            value={formData.email}/>
          <input type="text" className='input-box email-input'
            placeholder='input subject' name='subject' required
            onChange={handleChange}
            value={formData.subject}/>
          <input type="tel" className='input-box email-input'
            placeholder='Your Phone Number' name='phone' required
            onChange={handleChange}
            value={formData.phone}/>
          <textarea type="text" placeholder='Your Message' name='message'
            className='input-box body-input' required
            onChange={handleChange}
            value={formData.message}></textarea>
          <button type="submit" className="contact-btn"
          >
            Send Email
          </button>
        </form>
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/nicoay59"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github' loading="lazy"/>
        </a>
        <a href="https://www.linkedin.com/in/nico-ari-saputra/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin' loading="lazy"/>
        </a>
        <a href="https://www.instagram.com/nicoayyy/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={instaGram} alt='instagram' loading="lazy"/>
        </a>
      </div>
      <Footer
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact