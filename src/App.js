import React from 'react';
import AppRoute from './routes/AppRoute';




function App() {
  
  // window.addEventListener("load", function(event) {
  //   const loader = document.querySelector(".loader");
      //Agrega la clase "loader hiden"
  //   loader.className +=" hiden"; 
  // });

  return (
    <>
      {/* <div className="loader">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>     */}
      
    <AppRoute />
    </>
  );
}

export default App;
