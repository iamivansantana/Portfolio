import React from "react";
import ItemCard from "./itemCard/ItemCard";
import{ projects } from '../data/dataProjects';
import { Link } from "react-router-dom";


const Item = () => {


  var newArray =  projects.filter((project,index) => index<3);

  return (
    <>
      <div className="items-cont">
        <div className="container-grid">
      

        {
            //mapeo con los Projects
            newArray.map(project =>(
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
      <Link to="/portfolio"  style={{textDecoration:'none'}}>
        <h3 style={{textAlign:"center",position:'relative',bottom:'-80px',cursor:'pointer',color:'darkcyan',fontSize:'1.5rem'}}>See More...</h3>
      </Link>
    </>
  );
};

export default Item;
