function App() {
  return (
    <div className="navbar">
        <div className="logo">
                <p className="logo">ReelMotion</p>
        </div>

      <div className="menu">
          <ul>
            <li><a href="home">home</a></li> 
            <li><a href="movies">movies</a></li>
            <li><a href="watchlist">watchlist</a></li>
          </ul>
      </div>

        <div className="serchbox">
          <input type="text" placeholder="serching" />
          <div id="icon">
          <i class="fa-solid fa-magnifying-glass" style={{color:"black" }}></i>
          </div>
        </div>

                <div className="Login">

                    <button className="">Login</button>

                </div>
    </div>
  );
}

export default App;
