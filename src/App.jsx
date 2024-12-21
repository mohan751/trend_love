import React from "react";
import "./App.css";
import BestOfElectronics from "./Components/bestofelectronics/BestOfElectronics";
import Home from "./Components/home/Home";
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Mobilespage from "./Components/mobiles/Mobiles";
import Default from "./Components/home/default";


// function App() {

//   return (
//     <div className="body">

//       <Home />
//       <br></br>
//       <BestOfElectronics />
//     </div>
//   )
// }

// export default App;



function App() {

  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element ={<Default />} />

        <Route path="/mobilespage" element={<Mobilespage />} />
        </Routes>
        </Router>

    </div>
  )
}

export default App;