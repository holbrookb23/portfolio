import React, { useState } from 'react';
import gmail from './../img/icons/gmail-logo-48.png';
import phone from './../img/icons/phone-48.png';
import "./contact.css"



function Contact(props) {
  const [{ name, email, message }, setForm] = useState({ name: '', email: '', message: ''});
  

  

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // props.onSubmit({
    //   name: props.name,
    //   email: props.email,
    //   message: props.message,
    // });

    setForm('');
    
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };
  
  return (
    <section className="bd p z-1" id="contact">
            <h3 className='title'>Leave a message</h3>
            <div className="df pl jc-se pt">
                <a href="mailto: bholbrook254@gmail.com"><img src={gmail} alt="gmail logo"/></a>
                <a href="tel: 6304745206"><img src={phone} alt="Phone icon"/></a>
            </div>
            <div className='mess-container'>
              <form className="fm" onSubmit={handleSubmit}>
                <label htmlFor="name" className='lbl'>name:</label>
                <input
                  type="text"
                  placeholder="ex: John Smith"
                  value={name}
                  name="name"
                  className="inp"
                  onChange={handleChange}
                  required
                ></input>
                <label htmlFor="email" className='lbl'>email:</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  name="email"
                  pattern='/.+\@.+\..+/'
                  className="inp"
                  onChange={handleChange}
                  required
                ></input>
                <label htmlFor="message" className='lbl'>message:</label>
                <textarea name="paragraph_text" className='txt' cols="50" rows="10"></textarea>
                
                
                <button className="fm-btn">submit</button>
              </form>
            </div>
        
            
    </section>
  );
}

export default Contact;