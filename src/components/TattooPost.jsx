import './TattooPost.css'

function TattooPost(props) {

  const { tattoo, closeTattooClick } = props

  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" onClick={closeTattooClick} />
      <div className="tattoo-post-content">
        <img src={tattoo.fullimage} />
        <h4>{tattoo.text}</h4>
      </div>
    </div>
  )
}

export default TattooPost;