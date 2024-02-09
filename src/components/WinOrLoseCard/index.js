import './index.css'

const WinOrLoss = props => {
  const {score, loss, win, playButton} = props

  const onPlayButton = () => {
    playButton()
  }

  return (
    <>
      {loss && (
        <div className="loss-container">
          <div className="loss-container-text-container">
            <h1 className="loss-con-heading">You Loss</h1>
            <p className="loss-con-para">Best Score</p>
            <p className="loss-con-score">{score}/12</p>
            <button className="play-button" onClick={onPlayButton}>
              Play Again
            </button>
          </div>
          <img
            className="loss-con-image"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          />
        </div>
      )}

      {win && (
        <div className="loss-container">
          <div className="loss-container-text-container">
            <h1 className="loss-con-heading">You Won</h1>
            <p className="loss-con-para">Best Score</p>
            <p className="loss-con-score">
              {12}/{12}
            </p>
            <button className="play-button" onClick={onPlayButton}>
              Play Again
            </button>
          </div>
          <img
            className="loss-con-image"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
        </div>
      )}
    </>
  )
}

export default WinOrLoss
