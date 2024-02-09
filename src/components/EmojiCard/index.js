import './index.css'

const EmojiCard = props => {
  const {details, onEmoji} = props
  const {id, emojiName, emojiUrl} = details

  const onEmojiClick = () => {
    onEmoji(id)
  }

  return (
    <li>
      <button className="emoji-container" onClick={onEmojiClick}>
        <img className="emoji" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
