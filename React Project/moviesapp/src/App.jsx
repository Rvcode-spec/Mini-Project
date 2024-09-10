function App() {
  return (
    <div className="navbar">
        <div className="logo">
                <p className="logo">ReelMotion</p>
        </div>

      <nav className="menu">
          <ul>
            <li>home</li>
            <li>movies</li>
            <li>Watchlist</li>
          </ul>
      </nav>

        <div className="serch-box">
          <input type="text" placeholder="serching" />
          <i class="fa-solid fa-magnifying-glass" style={{color:"black" }}></i>
        </div>

          <div className="user-icon">
          <i class="fa-solid fa-user" style={{color:"#fff"}}></i>
          </div>
    </div>
  );
}

export default App;
