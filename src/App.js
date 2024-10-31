import "./App.css";

function App() {
  return (
    <div className="App">
      <article className="card">
        <div className="img-container">
        <img className="nft" src="/images/image-equilibrium.jpg" alt="nft" />
        <div className="overlay">
          <img className="overlay-icon" src="/images/icon-view.svg" alt="view" />
        </div>
        </div>
        <div className="content-info">
          <h1>Equilibrium #3429</h1>
          <p>
            Our Equilibrium collection promotes
            <br />
            balance and calm.
          </p>
        </div>
        <div className="icons">
          <div className="l-icon">
            <img
              className="ether-icon"
              src="/images/icon-ethereum.svg"
              alt="ether-icon"
            />
            <h1>0.041 ETH</h1>
          </div>
          <div className="r-icon">
            <img
              className="clock-icon"
              src="/images/icon-clock.svg"
              alt="clock-icon"
            />
            <h1>3 days left</h1>
          </div>
        </div>
        <hr />
        <div className="profile">
          <img className="profile-img" src="/images/image-avatar.png" alt="profile-img" />
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </article>
    </div>
  );
}

export default App;
