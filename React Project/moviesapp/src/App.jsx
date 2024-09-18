import Banner from "./Movieapp/Banner";
import Home from "./Movieapp/Home";
import Movies from "./Movieapp/Movies";
import Navbar from "./Movieapp/Navbar";
import Watchlist from "./Movieapp/Watchlist";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>} />

{/* Movies Route */}
          <Route path="/movies" element={<><Banner/> <Movies/></>} />

        <Route path="/watchlist" element={ <Watchlist/>}></Route>

    
     
      </Routes>
      </BrowserRouter>
      </>
      
        

    </div>
  );
}

export default App;
