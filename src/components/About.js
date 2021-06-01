import React from 'react';
import { Parallax } from 'react-parallax';


const About = () => {
    const imagen = './Images/captura-pc.png';
    
    
    return (
        <div className="body-area2">
             <Parallax
                bgImage={imagen}
                bgImageStyle={{height: '0%'}}
                strength={200}
                renderLayer={percentage => (
                    <div>
                        <div 
                            className="aboutme"
                            style={{
                                transform:`translate(-${percentage * 200}%, 0%)`
                            }}
                        >
                            <h1>About Me</h1>
                        </div>
                        <div 
                            className="lineMe"
                            style={{
                                transform:`translate(${percentage * 288}%, 0%)`
                            }}
                        >
                            <p id="lineMeText" >Software Engineer.</p> 
                        </div>
                        <div 
                            className="LineDesc"
                            style={{
                                transform:`translate(0%, ${percentage * 200}%)`
                            }}
                        >
                            <p>
                            <i className="em em-wave"></i>Hello, my name is Iván Santana, I am a Software Engineer.
                                My focus has been primarily front-end web development.
                                <br></br><br></br>
                                I am a responsible person, committed to any project that is carried out, enthusiastic, creative and collaborative, working as a team, learning from others and helping at all times.
                                <br></br><br></br>

                                On the other hand I love to enjoy the small and big things in life, I am passionate about music, I love places with live music,<i className="em em-the_horns" ></i><i className="em em-sunglasses" ></i> I love to travel,<i className="em em-earth_americas" ></i> I love dogs<i className="em em-dog" ></i> and my I work as a developer.<i className="em em-computer" ></i><i className="em em-muscle" ></i>
                            </p>
                        </div>
                        <div loading="lazy" className="photo2"></div>

                    </div>
                )}
             >
                 <div style={{height:'600px'}}> 
                        {/* <img className="text" src="ios.png" alt="ios" width="100%"/>  */}
                        
                 </div>
             </Parallax>

            
        </div>
    )
}

export default About
