import "./creativecard.scss";

function CreativeCard({creativeImg}) {
  return (
    <div className="creative-card">
      <img src={creativeImg} alt="social media img" />
    </div>
  )
}

export default CreativeCard