import React, { useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// import Boshqaruvpaneli from "./components/ProfilePage/BoshqaruvPaneli/boshqaruvpaneli";
import RouterMain from "./root/RouterMain";
// import Profilnavbar from "./components/ProfilePage/ProfilNavbar/profilnavbar"; 

function App() {
  return (
    <div className="App">
      <RouterMain/>
      {/* <Profilnavbar/> */}
      {/* <Boshqaruvpaneli/>  */}
    </div>
  );
}

export default App;
