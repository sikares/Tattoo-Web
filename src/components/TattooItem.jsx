import './TattooItem.css'

function TatooItem(props) {

  const { tattoo, onTattooClick } = props;

  return (
    <div className="tattoo-item">
      <img src = {tattoo.image} onClick={() => {onTattooClick(tattoo)}} />
      <h4>{tattoo.text}</h4>
    </div>
  )
}

export default TatooItem;