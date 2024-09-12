function App() {
  return (
    <div className="navbar">
        <div className="logo">
                <p className="logo">ReelMotion</p>
        </div>

      <div className="menu">
          <ul>
            <li>home</li> 
            <li>movies</li>
            <li>watchlist</li>
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
