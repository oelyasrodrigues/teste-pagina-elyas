import "./cardScroll.scss"

function CardScroll({img}) {
  return (
    <div className='job-card'>
      <img src={img} alt="job-img" />
    </div>
  )
}

export default CardScroll