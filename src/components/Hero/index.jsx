import "./hero.scss";

function Hero() {
  const date = new Date()

  let hora 

  if(date.getHours() <= 12 && date.getHours() >= 0){
    hora = 'Bom dia'
  } else if(date.getHours() >= 13 && date.getHours() <= 18){
    hora = 'Boa tarde'
  } else {
    hora = 'Boa noite'
  }


  return (
    <header className="hero d-flex">
      <div className="container">
        <div className="content">
          <h1>Tenha páginas incríveis que convertem!!</h1>
          <h2>Aumente seu faturamento com páginas estratégicas que convertem e fique à frente da concorrência.</h2>
          <a href={`https://wa.me/98988149744?text=Oi, ${hora}! Vim pelo seu site e quero fazer um orçamento.`} className="button">QUERO UM ORÇAMENTO</a>
        </div>
      </div>
    </header>
  )
}

export default Hero