import './index.css'

const Navbar = props => {
  const {score, topScore, gameResult} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {!gameResult && (
        <div className="Navbar-text-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
