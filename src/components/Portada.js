import React, { useState } from 'react'
import ReactTyped from 'react-typed';

const Portada = () => {
    const[bandera,setBandera]=useState(true);
        setTimeout(() => {
            setBandera(false);   
        }, 4500);
    
    return (
        <div className="body-area" >
            <div className="caja-ios">
                <div className="contenedorIzq">
                    <div className="fantasma"></div>
                    <img loading="lazy" className="foto" src="ios.png" alt="ios" width="65%"/> 
                        {/* <img className="foto" src="ios.png" alt="ios" width="100%" height="100%"/> */}
                </div>
            </div>
            <div className="caja-saludo">
                <div id="textoInicio" className="red-pink">
                    {/* <p align="left" className="red-pink" >HI, I AM<br></br> IVAN SANTANA<br></br>&amp; THIS IS <br></br><samp style={{backgroundColor:"#47d6d6",fontFamily: "Anton, sans-serif"}}>THE PROJECT X.</samp></p> */}
                    <div id="one"className="red-pink">Hi, I am<span>&#160;</span></div>
                    <div id="two"className="red-pink">Ivan Santana<span>&#160;</span></div>
                    <div id="three"className="red-pink">&amp; This is<span>&#160;</span></div>
                    {/* {bandera?<div id="four"> The project x<span>&#160;</span></div> : <div id="four">My website<span>&#160;</span></div>} */}
                    {/* <div id=""className="red-pink"><span className="typed"></span></div> */}
                    {bandera? null :
                        <div >
                            <ReactTyped
                                loop
                                typeSpeed={100}
                                backSpeed={100}
                                strings={['The project x. ', 'My website. ' ]}
                                smartBackspace
                                shuffle={false}
                                backDelay={1}
                                fadeOut={false}
                                fadeOutDelay={100}
                                startDelay={100}
                                loopCount={0}
                                showCursor
                                cursorChar=""
                                className="four"
                            />
                        </div>
                    }
                </div>
            </div> 
        </div>
    )
}

export default Portada
