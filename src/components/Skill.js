import React from 'react'

const Skill = ({datos}) => {
    const{nombre}=datos;
    return (
        <>
            <div className="column">
                <div className="skills-cad">
                    <div className="skills-cad-left">
                        <span className="skills-span">{nombre}</span>
                    </div>
                    {/* <div className="skills-cad-right">
                        <div className="background-img">
                            <span className="skills-span-img"><img src={pad} width="100%"  alt={nombre}/></span>
                        </div>
                    </div> */}
                </div>
            </div>  
        </>
    )
}

export default Skill
