import React from 'react';
import '../itemCard/ItemCard.css';

const ItemCard = ({ name,urlGithub,urlSite,imgDeskPath,imgMovilPath,description }) => {
    return (
        <>
        <div className="item-card">
            <div className="item-card-title">
                <div className="item-card-title-izq">
                    <span style={{ marginLeft: "10%" }}>{ name }.</span>
                </div>
                <div className="item-card-title-der">
                    {/* <img
                    src="Images/icon-g.png"
                    alt="Enlace git"
                    
                    /> */}
                    <a href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration:'none',color:"black",fontSize:"2.2rem"}}
                    className="social-icons"
                    >
                        <i className="githubIcon fa fa-github"></i>
                    </a>
                </div>
            </div>

            <div className="item-card-link">
                <a href={urlSite}
                    target="_blank"
                    className="card-hover"
                    rel="noopener noreferrer"
                >
                    <div >
                        <div className="center" style={{top:'40%'}}>
                        <h2>Go site...</h2>
                        </div>
                    </div>
                </a>

                <div className="item-card-conten">
                    <div className="item-card-left">
                        <img loading="lazy"
                            className="center"
                            src={imgDeskPath}
                            alt="imagenDesk"
                            width="98%"
                        />
                    </div>
                    <div className="item-card-right">
                        <img
                            loading="lazy"
                            className="center"
                            src={imgMovilPath}
                            alt="imagenMovil"
                            width="85%"
                        />
                    </div>
                </div>
                <div className="item-card-description">
                    <p className="description-item">
                       {description}
                        <br/>
                        clic here for more....
                    </p>
                </div>
            </div>

        </div>    
            
        </>
    )
}

export default ItemCard
