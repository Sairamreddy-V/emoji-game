/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoss from '../WinOrLoseCard'

import './index.css'

let idList = []

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isLoss: false, isWon: false}

  onEmojiButton = id => {
    const buttonResult = 0
    if (idList.length === 12) {
      this.setState(prevState => ({isWon: true, topScore: 12, score: 0}))
    } else if (idList.includes(id)) {
      this.setState(prevState => ({isLoss: true}))
      buttonResult
    } else {
      idList.push(id)
      const {score, topScore} = this.state
      this.setState(prevState => ({
        score: idList.length,
      }))
    }
  }

  onPlayButton = () => {
    const {score, topScore} = this.state
    idList = []
    if (score >= topScore) {
      this.setState({topScore: score, score: 0, isLoss: false, isWon: false})
    } else {
      this.setState({score: 0, isLoss: false, isWon: false})
    }
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = () => {
      return emojisList.sort(() => Math.random() - 0.5)
    }
    shuffledEmojisList()
    const {score, topScore, isLoss, isWon} = this.state
    const gameResult = isLoss === false && isWon === false
    const navGameResult = isLoss === true || isWon === true

    return (
      <div className="page-container">
        <Navbar score={score} topScore={topScore} gameResult={navGameResult} />
        <div className="bot-page-container">
          {gameResult && (
            <ul className="ul-container">
              {emojisList.map(eachOne => (
                <EmojiCard
                  details={eachOne}
                  key={eachOne.id}
                  onEmoji={this.onEmojiButton}
                />
              ))}
            </ul>
          )}
          <WinOrLoss
            score={score}
            loss={isLoss}
            Win={isWon}
            playButton={this.onPlayButton}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
