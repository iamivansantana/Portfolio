import React from 'react';
import NavBarComponents from './navBarComponents/NavBarComponents';
import{ projects } from '../data/dataProjects';
import ItemCard from './itemCard/ItemCard';

const PortfolioMenuScreen = () => {
    return (
        <>
            <NavBarComponents 
                ruta = { '/portfolio' }
            />
            <h3 style={{textAlign:'center', color:'#25375a',fontWeight:'500'}}>PROJECTS' PORTFOLIO.</h3>
            <p style={{textAlign:'justify',color:'lightsteelblue',width:'80%'}} className="centerTop"
                >NOTE: You can see the code and use it if you wish, you are free to use whatever you see here
                 as it suits you, with the exception of some images that were taken from some other pages for recreational purposes.
                The information is for sharing. In our world there are usually a thousand ways to do anything, share your knowledge.
            </p>
            <div className="container">
               <div className="container-grid">
                
                {
                    //mapeo con los Projects
                    projects.map(project =>(
                        <ItemCard 
                        key={ project.id }
                        name = { project.name }
                        urlGithub = { project.urlGithub }
                        urlSite = { project.urlSite }
                        imgDeskPath = { project.imgDeskPath }
                        imgMovilPath = { project.imgMovilPath }
                        description = { project.description }
                        
                        />
                        ))
                    }
               </div>
            </div>
            <h3 style={{textAlign:'center', color:'#25375a',fontWeight:'200',padding:'4rem'}}>BY IVAN SANTANA.</h3>
        </>
    )
}

export default PortfolioMenuScreen;
