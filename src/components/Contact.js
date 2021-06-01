import React, { useState } from 'react';
import emailjs from 'emailjs-com'; //npm install emailjs-com --save




const Contact = () => {

    const [contact, setContact] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    });

    
    const actualizarState = (e)=>{
        setContact({...contact,[e.target.name]: e.target.value})
     }

    //  const {nombre, email, message} = contact;

     const handdleSubmit =(e)=>{
         e.preventDefault();
         

         emailjs.sendForm('service_ov2mthy', 'template_p3642io', e.target, 'user_WXUivny2bGL0ae4ml7WwX')
            .then((result) => {
            console.log(result.text);
            alert('Message Sent');
            }, (error) => {
            console.log(error.text);
            });

         e.target.reset();

     }



    return (
        <>
        <h1 style={{color:'black',textAlign:'center'}}>CONTACT <span style={{color:'#47d6d6'}}>ME</span></h1>
            <div >
                <div className="contact-form">
                    <form
                        onSubmit={handdleSubmit}
                        className="centrado"
                    >
                        
                        <input 
                        style={{border:'0'}}
                            type="text"
                            name="name"
                            className="input-form"
                            placeholder="Name*"
                            autoComplete="none"
                            required
                            onChange={actualizarState}
                            
                        />
                        
                        <input 
                        style={{border:'0'}}
                            type="email"
                            name="email"
                            className="input-form"
                            placeholder="Email*"
                            required
                            onChange={actualizarState}
                        />
                        
                        <input 
                        className="input-form"
                        style={{border:'0'}}
                            type="number"
                            name="phone"
                            id='phone'
                            placeholder="Phone Number"
                            onChange={actualizarState}
                        />
                        
                        
                        <textarea 
                        className="input-area"
                            type="textarea"
                            name="message"
                            style={{resize: 'none', border:'none'}}
                            cols="30"
                            rows="10"
                            placeholder="Message*"
                            required
                            onChange={actualizarState}
                        ></textarea>
                        <button 
                        className="form-input-sumbit"
                        style={{border:'0',width:'50%'}}
                            type="submit"   
                        >
                        Send
                        </button>
                    </form>
                </div>
                <div className="contact-me centrado">
                    <div style={{width:'90%'}}><h2 style={{fontWeight:'200'}}>Hi.</h2></div>
                    <div style={{width:'90%'}}><h2 style={{fontWeight:'200',marginTop:'1rem'}}>Do not hesitate to contact me.</h2></div>
                    <div style={{width:'90%'}}><p style={{fontWeight:'100'}}>You can find me on social networks and write to me, I will be happy to help you</p></div>
                    <div style={{width:'90%'}}><p style={{fontWeight:'100'}}>Email:  <a style={{textDecoration:'none', color:'#111620'}} href="mailto:iam.ivansantana@gmail.com"  >iam.ivansantana@gmail.com</a></p></div>
                    <div style={{width:'90%',backgroundColor:''}}>
                        <div className="social-media">
                            <a href='https://twitter.com/iamivansantana'
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration:'none'}}
                                className="form-input-sumbit social-icons">
                            <i className="fa fa-twitter"></i></a>
                            <a href='https://www.linkedin.com/in/ivan-ojendis-santana-71b2051b7/'
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration:'none'}}
                                className="form-input-sumbit social-icons"><i className="fa fa-linkedin"></i></a>
                            <a href='https://www.instagram.com/ivansanttana/'
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration:'none'}}
                                className="form-input-sumbit social-icons"><i className="fa fa-instagram"></i></a>
                            <a href='https://github.com/iamivansantana'
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration:'none'}}
                                className="form-input-sumbit social-icons"><i className="fa fa-github"></i></a>
                        </div>

                    </div>
                    
                
                </div>

                <div className="traslate" style={{position:'absolute',bottom:'55px',left:'50%'}}>

                    <p style={{fontWeight:'100'}}>BY IVAN SANTANA</p>
                </div>
                
            </div>  
        </>
    )
}

export default Contact
